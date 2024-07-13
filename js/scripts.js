/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function handleClick(id){
    const monkeys = [
        { id: 1, name: 'Coco Nutty', species: 'Capuchin Monkey', description: 'Coco Nutty is a lively Capuchin Monkey known for its mischievous nature and quick intelligence. It loves to explore and solve puzzles, keeping both visitors and zookeepers entertained.', image:'assets/coconutty.png',bananas:0,price:5,cartCount: 0},
        { id: 2, name: 'Swinger', species: 'Spider Monkey', description: 'Swinger is an agile Spider Monkey who spends most of its time gracefully swinging from branch to branch. Its playful antics and acrobatic skills make it a crowd favorite.', image:'assets/swinger.png' ,bananas:0,price:5,cartCount: 0},
        { id: 3, name: 'Spidey', species: 'Spider Monkey', description: 'Spidey is an adventurous Spider Monkey, always on the lookout for new heights to conquer. Its energetic personality and boundless curiosity are truly captivating.', image:'assets/spidey.png',bananas:0,price:5 ,cartCount: 0},
        { id: 4, name: 'Echo', species: 'Howler Monkey', description: 'Echo is a Howler Monkey with a powerful voice that can be heard from miles away. It uses its loud howls to communicate and establish territory, impressing all who hear it.', image:'assets/echo.png',bananas:0,price:5 ,cartCount: 0},
        { id: 5, name: 'Howie', species: 'Howler Monkey', description: 'Howie is a boisterous Howler Monkey known for its deep, resonant calls. It spends its days lounging in the treetops and vocalizing to its companions.', image:'assets/howie.png',bananas:0,price:5,cartCount: 0 },
        { id: 6, name: 'Squeaky', species: 'Squirrel Monkey', description: 'Squeaky is a tiny Squirrel Monkey with a big personality. Its high-pitched calls and quick movements make it a delight to watch.' , image:'assets/squeaky.png',bananas:0,price:5,cartCount: 0},
        { id: 7, name: 'Mandy', species: 'Mandrill', description: 'Mandy is a vibrant Mandrill with a colorful face and a gentle demeanor. Known for its striking appearance, Mandy is a popular attraction.' , image:'assets/mandy.png',bananas:0,price:5,cartCount: 0},
        { id: 8, name: 'Rainbow', species: 'Mandrill', description: 'Rainbow is a stunning Mandrill with a rainbow-colored face. Its bold colors and calm nature make it a favorite among visitors.' , image:'assets/rainbow.png',bananas:0,price:5,cartCount: 0},
        { id: 9, name: 'Tiny Tim', species: 'Tamarin', description: 'Tiny Tim is a small Tamarin with a heart full of courage. Despite its size, it loves to explore and interact with its surroundings.' , image:'assets/tinytim.png',bananas:0,price:5,cartCount: 0},
        { id: 10, name: 'Fuzzy', species: 'Tamarin', description: 'Fuzzy is a fluffy Tamarin with a playful spirit. Its soft fur and curious nature endear it to everyone who meets it.' , image:'assets/fuzzy.png',bananas:0,price:5,cartCount: 0},
        { id: 11, name: 'Marv', species: 'Marmoset', description: 'Marv is a cheeky Marmoset with a penchant for mischief. Its small size and quick reflexes make it a fascinating creature to observe.' , image:'assets/marv.png',bananas:0,price:5,cartCount: 0},
        { id: 12, name: 'Peppy', species: 'Marmoset', description: 'Peppy is an energetic Marmoset always on the move. Its lively antics and expressive face make it a joy to watch.' , image:'assets/peppy.png', image:'assets/peppy.png',bananas:0,price:5,cartCount: 0},
        { id: 13, name: 'Mano', species: 'Marmoset', description: 'Mano is a clever Marmoset with a knack for getting into everything. Its inquisitive nature makes it a charming addition to the zoo.' , image:'assets/mano.png',bananas:0,price:5,cartCount: 0},
        { id: 14, name: 'Big Nose', species: 'Proboscis Monkey', description: 'Big Nose is a unique Proboscis Monkey known for its large, prominent nose. Its distinctive appearance and gentle behavior make it stand out.', image:'assets/bignose.png' ,bananas:0,price:5,cartCount: 0},
        { id: 15, name: 'Snouty', species: 'Proboscis Monkey', description: 'Snouty is a charismatic Proboscis Monkey with a lovable personality. Its long nose and endearing expressions capture the hearts of all visitors.' , image:'assets/snouty.png',bananas:0,price:5,cartCount: 0},
        { id: 16, name: 'Verde', species: 'Vervet Monkey', description: 'Verde is a lively Vervet Monkey with a vibrant greenish hue. It enjoys playing and interacting with its troop members.' , image:'assets/verde.png',bananas:0,price:5,cartCount: 0},
        { id: 17, name: 'Chirpy', species: 'Vervet Monkey', description: 'Chirpy is a vocal Vervet Monkey known for its cheerful calls. Its friendly nature and playful demeanor make it a delight to see.' , image:'assets/coconutty.png', image:'assets/chirpy.png',bananas:0,price:5,cartCount: 0},
        { id: 18, name: 'Colby', species: 'Colobus Monkey', description: 'Colby is a serene Colobus Monkey with striking black and white fur. It loves to relax in the treetops, observing its surroundings with a calm demeanor.', image:'assets/colby.png' ,bananas:0,price:5,cartCount: 0},
        { id: 19, name: 'Panda Paws', species: 'Colobus Monkey', description: 'Panda Paws is a charming Colobus Monkey with distinct black and white markings. Its gentle movements and peaceful nature are a soothing presence in the zoo.' , image:'assets/pandapaws.png',bananas:0,price:5,cartCount: 0},
        { id: 20, name: 'Cheeky', species: 'Chimpanzee', description: 'Cheeky is a playful Chimpanzee known for its mischievous antics and clever tricks. Its intelligent eyes and expressive face make it a crowd favorite.' , image:'assets/cheeky.png',bananas:0,price:5,cartCount: 0},
        { id: 21, name: 'Jazz', species: 'Chimpanzee', description: 'Jazz is an energetic Chimpanzee with a love for music and rhythm. Its lively personality and playful nature make it a joy to watch.' , image:'assets/jazz.png',bananas:0,price:5,cartCount: 0},
        { id: 22, name: 'Coco', species: 'Chimpanzee', description: 'Coco is a social Chimpanzee who enjoys interacting with visitors and fellow chimps. Its friendly demeanor and curious behavior make it a popular attraction.' , image:'assets/coco.png',bananas:0,price:5,cartCount: 0},
        { id: 23, name: 'King Kong', species: 'Gorilla', description: 'King Kong is a majestic Gorilla with a commanding presence. Its strong build and gentle eyes make it a beloved figure in the zoo.' , image:'assets/kingkong.png',bananas:0,price:5,cartCount: 0},
        { id: 24, name: 'Goliath', species: 'Gorilla', description: 'Goliath is a powerful Gorilla known for its impressive size and strength. Despite its intimidating appearance, it has a calm and peaceful nature.' , image:'assets/goliath.png',bananas:0,price:5,cartCount: 0}
    ];
    const selectedMonkey = monkeys.find(monkey => monkey.id === id);

    // Update local storage with the selected monkey's details
    localStorage.setItem('selectedMonkey', JSON.stringify(selectedMonkey));

    // Redirect to the details page
    redirectToDetailsPage(selectedMonkey);
}

function redirectToDetailsPage(monkey) {
    const queryString = `animal.html?id=${monkey.id}&name=${monkey.name}&species=${monkey.species}
    &description=${encodeURIComponent(monkey.description)}&image=${monkey.image}&price=${monkey.price}&bananas=0`; //initial bananas count is 0
    window.location.href = queryString;
}
