/**
 * Custom redux tool for subscribing to changes to specific parts of the redux state
 */
import { get, has, uniqueId } from 'lodash'

const subscriptions = []
let _store
let _unsubscribeStore

const defaultComparer = (prev, next) => prev === next

const processSubscription = (sub, state) => {
  const currentValue = get(state, sub.path)
  sub.fn(sub.lastValue, currentValue)
  sub.lastValue = currentValue
}

const initialiseSubscription = (sub, state) => {
  if (!has(sub.lastValue)) {
    sub.lastValue = undefined
    processSubscription(sub, state)
  }
}

const startWatcher = store => {
  if (_unsubscribeStore) {
    throw new Error(
      'redux watcher has already been started'
    )
  }

  _store = store

  // initialise all the subscriptions as the store has now been set
  subscriptions.forEach(sub =>
    initialiseSubscription(sub, store.getState())
  )

  // setup the redux subscriber
  _unsubscribeStore = store.subscribe(() => {
    subscriptions.forEach(sub =>
      processSubscription(sub, store.getState())
    )
  })
}

const stopWatcher = () => {
  if (_unsubscribeStore) {
    _unsubscribeStore()
    _unsubscribeStore = null
    _store = null
  }
}

const subscribe = (
  path,
  fn,
  comparer = defaultComparer
) => {
  const id = uniqueId()
  const sub = {
    id,
    path,
    fn,
    comparer
  }
  subscriptions.push(sub)

  // if the store has already been setup initialise the subscription
  if (_store) {
    initialiseSubscription(sub, _store.getState())
  }

  return id
}

const unsubscribe = id => {
  const index = subscriptions.findIndex(
    sub => sub.id === id
  )
  if (index >= 0) {
    subscriptions.splice(index, 1)
  }
}

export { startWatcher, stopWatcher, subscribe, unsubscribe }
