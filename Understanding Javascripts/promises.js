// Callback function 
function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false
  let userWatchingCatMeme = false

  if (userLeft) {
    errorCallback({
      name: 'User Left', 
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat' 
    })
  } else {
    callback('Thumbs up and Subscribe')
  }
}

// Promise function 
function watchTutorialPromise() {
  let userLeft = false
  let userWatchingCatMeme = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

// Calling Callback function
watchTutorialCallback(message => {
  console.log(message)
}, error => {
  console.log(error.name + ' ' + error.message)
})


// Calling promise function
watchTutorialPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})


// New promise functions
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

// Runs all of the above at the same time, 
// if any one took a longer time, then others would also have to wait,
//  only then it will return all of the result 
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {
  console.log(messages)
})

// Same as the above but only return one of them which will run and return faster than others
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(message => {
  console.log(message)
})