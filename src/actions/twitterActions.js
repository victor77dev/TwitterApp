/**
 * Twitter Actions
 */

export function getTwitterData() {
  return {
    type: 'GET_DATA',
  }
}

export function getDataLoaded(data) {
  return {
    type: 'GET_DATA_LOADED',
    data,
  }
}

export function getDataError(error) {
  return {
    type: 'GET_DATA_ERROR',
    error,
  }
}
