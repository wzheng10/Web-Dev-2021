const tweetForm = document.querySelector('#tweetForm')
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0]
    // const tweetInput = document.querySelectorAll('input')[1]
    const usernameInput =(tweetForm.elements.username);
    const tweetInput = (tweetForm.elements.tweet);
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value ='';
    tweetInput.value ='';


    // console.log(usernameInput.value, tweetInput.value)
    // console.log(newTweet)
   
})

const addTweet = (username, tweet) => {

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`)
    tweetContainer.append(newTweet);
}