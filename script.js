document.addEventListener("DOMContentLoaded", function() { 
    const textBox = document.getElementById("textBox");
    const button = document.getElementById("response");
    const imagePlaceHolder = document.getElementById("imagePlaceHolder");
    const adviceList = document.getElementById("adviceList");
    const adviceElement = document.getElementById("answers");

    const responses = {
        sad: [ {
                text: 'The most helpful piece of advice I can give you for being sad is, to let yourself feel it. Cry it out, go find a place you can be alone, and feeeeeel what you are feeling. BUT, whenever you leave whatever hole you crawled into, you LEAVE what made you crawl in that hole, in that hole.',
                image:'https://i.postimg.cc/0NFtfdRR/saadblu.png',
              }, 
              {
                text: 'I know feeling this way sucks, but you are gonna be okay, you are strong! <3',
                image: 'https://i.postimg.cc/y6FfmZLt/stronggirl.webp',
              },
        ],
        happy: [
            {
                text: 'Happiness comes and goes, but always cherish these moments, because these are the moments, that make this life worth living!',
                image:'https://i.postimg.cc/KYRqBpWD/joy.jpg',
            },
            {
                text: 'Go spread this joy your feeling, there is no better feeling than being happy with the people you love! Go spend time with moo, or mom, or someone you love and do something you BOTH love because that right there is the secret to a loooong happy life!',
                image: 'https://i.postimg.cc/3RGtb4Yy/how-board-games-saved-christmas-930x620.jpg',
            },
        ],  
        angry: [
            {
                text: 'The most valuable skill you can learn in life little one is breathing, if you get angry, like reaaaaaaalllllly angry breathe in through your nose, and count 1...2...3...4...5... then breathe out through your mouth, and hold it 1...2...3...4...5... and repeat that 3-4 times you wont be angry anymore and you will be able to handle the situation with a clear head!',
                image: 'https://i.postimg.cc/SRZFmTt2/realbreathing.gif',
            },
            {
                text: 'You are probably angry for good reason but that doesn\'t give you the right to act a fool! You are smart so use your head!',
                image: 'https://i.postimg.cc/mkN8BvcB/calm-and-collected-d23ebf9494.jpg',
            },
            {
                text: 'Sometimes people just need their asses beat, if you feel like this is one of those times you CALL me first.(Don\'t let Mom see this one.)',
                image: 'https://i.postimg.cc/FFgQz81g/knuckle-Sandwich.jpg',
            }
        ],
        confused: [
            {
                text: 'If you are confused, and nothing is making sense, and you just don\'t know WHAT to do. Take some breaths and then do what you know in your HEART is the RIGHT thing to do, get out of that situation so that you can analyze why you were confused, and what was happening. Then you will be able to take care of the matter in a respectful manner.',
                image: 'https://i.postimg.cc/T2V9L50w/confusion.jpg',
            },
            {
                text: 'I think that sometimes life just gets overwhelming and you just need to breathe and take a little break go for a walk, and disconnect from all the craziness you are normally getting yourself into!',
                image: 'https://i.postimg.cc/cCCLSn4m/walking.jpg',
            },
        ],
        leftout: [
            {
                text: 'Unfortunatley at the end of the day sometimes we get left out of things, and that is A-okay because were not always meant to be friends with everyone we meet. You need to be comfortable and happy with just being by yourself because you there won\'t always be someone there.',
                image: 'https://i.postimg.cc/zDQJh3Gs/selflove.jpg',
            },
            {
                text: 'Be your own person, we aren\'t sheep in this family, we pave our own road, and do what makes us happy.',
                image: 'https://i.postimg.cc/HsQkCdTF/drSuess.png',
            },
        ],
        selfconcious: [
            {
                text: 'You are one of a kind Ryan Lynn you are the one and ONLY Ryan Lynn Scovel. People your whole life will try to tear you down, but you can NOT let them. You are so special Ryan, and God put you on this earth for a reason. Of that you can rest assured.',
                image: 'https://i.postimg.cc/JnDBNvjm/oneofakind.gif',
            },
            {
                text:  'You are funny, you are beautiful, you are kind, you are wonderful, you are you, and there is nothing more AMAZING than being yourself, and if the people around you can\'t see how amazing you are alllll that means, is that you need to surround yourself with different people, becuase you Ryan are AMAZING.',
                image: 'https://i.postimg.cc/jjRpJr0w/i-am-enough-filled.jpg',
            },
        ],
        inspired: [
            {
                text: 'You need to take whatever inspiration you are feeling and RUN with it, you can do anything!',
                image: 'https://i.postimg.cc/L8qzmJ0N/skyisthelimit.jpg',
            },
            {
                text: 'Do NOT let ANYone stop you, people will always try to hold you back out of fear, or there own failures. But if you hear nothing else that I say here THIS, the only way you can truly FAIL is if you don\'t learn from the mistake.',
                image: 'https://i.postimg.cc/SR6g7DMT/cantfail.png',
            },
        ],
        uninspired: [
            {
                text: 'You are not alone here so many people are uninspired, but all you have to do to find inspiration is start trying new things!',
                image: 'https://i.postimg.cc/RZHNPyFZ/newthings.jpg',
            },
            {
                text: 'Inspiration is like the wind, it comes and goes, but as long as you have a little motivation and a little dedication nothing will EVER stop you. Stay kind, and positive and good things will come your way.',
                image: 'https://i.postimg.cc/GpRhXpVX/inspired.jpg',
            },
        ],
        lost: [
            {
                text: 'Everything lost can be found again little one, reach out to someone if you feel this way I will talk to you as much for as long as possible! Everything will be okay. Just breathe.',
                image: 'https://i.postimg.cc/0rgqrWqV/download.jpg',
            },
        ],
        life: [
            {
                text: 'Life is HARD and it only gets MORE difficult, especially if you don\'t use the tools you have around you properly! The three most helpful tools in life are 1. The Bible. 2. Your family, and 3. Your friends.( The sad truth for you right now, is that 3 isn\'t really one YOU can rely on because most young people are too unaware of their surroundings, and/or unaware of how their actions affect others or they simply just don\'t care.)',
                image: 'https://i.postimg.cc/W1TS7PGK/god-family-friends.png',
            },
            {
                text: 'I think you are going to do AMAZING things, you are so smart, and so talented at so many things! BUT talent will only get you so far! Hard work beats talent EVERY single time. Nobody who is considered great, got there without a little blood, sweat, and tears. I know I introduced "unleash the dog" to you, but that is just as true in life, as it is in sports! (maybe just a little less aggressive in life.)',
                image: 'https://i.postimg.cc/6QR36FSW/hardWork.jpg',
            },
        ],
        friendship: [
            {
                text: 'Your friends will be one of the best parts of your life, but it is important to know who your REAL freinds are, but its MORE important to know the difference between people who say they are your friend, and the ones that actually ARE your friend. Your realest freinds will ALWAYS love you for you, (they may not agree with the choices you make and if they\'re reallllly good friends they will say something to you about it.) whereas fake friends will love you only when it is convientient for them. Or when others aren\'t around. This is where your character comes into play though. If they are fake friends cut them off, keep it corigil but don\'t let them disrupt your PEACE.',
                image: 'https://i.postimg.cc/ZKY6KkNF/fakefriends.png',
            },
            {
                text: 'You are so smart, so creative, truly Ryan you are awesome, and I am NOT saying that because I am your brother. TRUST me, you know I would tell you if I thought otherwise ;) So that said, if there ever comes a day where someone can\'t see that, take a deep breath realize your worth, and walk away!',
                image: 'https://i.postimg.cc/pdvWRvhP/worth.jpg',
            },
        ],
        boys: [
            {
                text: 'Just don\'t',
                image: 'https://i.postimg.cc/5ySG5c9S/noboys.jpg',
            },
        ],
        mom: [
            {
                text: 'TRUST ME I know mom can be a lot to deal with sometimes, but you need to know that she doesn\'t want anything but the best for you! She is doing what she thinks is the best decision for your life/future. So don\'t be too hard on her! She loves you! The best thing you can do is communicate.',
                image: 'https://i.postimg.cc/x1BBv3y8/IMG-0107.jpg',
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
            adviceElement.textContent = `Hahahha try again little one, "${inputAdvice}" is not one of the available inputs.`;
            imagePlaceHolder.innerHTML = '<img src = https://i.postimg.cc/YS0ph0Sz/tryagain.jpg>'
        }
        textBox.value = '';
    });
});