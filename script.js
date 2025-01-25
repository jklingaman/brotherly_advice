document.addEventListener("DOMContentLoaded", function() {
    const adiv = document.getElementById("adviceDiv");
    const adv = document.getElementById("advice");
    const main = document.getElementById("mainDiv");
    const textBox = document.getElementById("textBox");
    const button = document.getElementById("response");
    const imagePlaceHolder = document.getElementById("imagePlaceHolder");
    const adviceList = document.getElementById("adviceList");
    const adviceElement = document.getElementById("answers");

    const responses = {
        sad: [ {
                text: 'The most helpful piece of advice I can give you for being sad is, to let yourself feel it. Cry it out, go find a place you can be alone, and feeeeeel what you are feeling. BUT, whenever you leave whatever hole you crawled into, you LEAVE what made you crawl in that hole, in that hole.',
                image:'',
              },
        ],
        happy: [
            {
                text: 'Happiness comes and goes, but always cherish these moments, because these are the moments, that make this life worth living!',
                image:'',
            },
            {
                text: 'Go spread this joy your feeling, there is no better feeling than being happy with the people you love! Go spend time with moo, or mom, or someone you love and do something you BOTH love because that right there is the secret to a loooong happy life!',
                image: 'https://i.postimg.cc/YqBXzmqT/IMG-1975.jpg',
            },
        ],  
    };

    const advice = Object.keys(responses)

    const available = document.createElement("h2");
    available.textContent = 'Available Inputs';
    adviceList.appendChild(available);

    advice.forEach( ad => {
        const adItem = document.createElement("p");
        adItem.textContent = ad;
        adviceList.appendChild(adItem);
    });

    button.addEventListener("click", function() {
        const inputAdvice = textBox.value.trim().toLowerCase();
        if (responses[inputAdvice]) {
            const randomResponse = responses[inputAdvice][Math.floor(Math.random() * responses[inputAdvice].length)];
            adviceElement.textContent = randomResponse.text;
            imagePlaceHolder.innerHTML = '';
            if (randomResponse.image) {
                imagePlaceHolder.innerHTML = `<img src="${randomResponse.image}" alt="Advice Image">`;
            }
        } else {
            adviceElement.textContent = `hahahha Try again little one ${inputAdvice} is not one of the options.`;
        }
    });
});