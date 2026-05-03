const characters = [
    {
        name: "Daredevil",
        image: "https://i.pinimg.com/736x/f7/14/f7/f714f79ac688ba8d84e381c57cca53e1.jpg",
        video: "daredeviledit.mp4",
        show: "MCU",
        bio: "Matt Murdock is a blind lawyer by day and a fearless vigilante by night, protecting Hell's Kitchen from criminals.",
        gender: "Male", role: "Hero", species: "Human", powers: "Enhanced Senses", origin: "Earth", affiliations: "Defenders",
    },
    {
        name: "Daryl Dixon",
        image: "https://i.pinimg.com/736x/0b/fd/ab/0bfdab9d5725f4350ba8738d2eac97f7.jpg",
        video: "daryledit.mp4",
        show: "Walking Dead",
        bio: "A rugged survivor and expert tracker who becomes one of the most valuable members of Rick's group during the zombie apocalypse.",
        gender: "Male", role: "Leader/Hunter", species: "Daryl Dixon", powers: "Survivalist Tracker", origin: "Crossbow Knives Handgun", affiliations: "Atlanta Farm Prison Alexandria Hilltop Commonwealth",
    },
    {
        name: "Rick Grimes",
        image: "https://i.pinimg.com/736x/e1/1a/a7/e11aa7e3537b05b9ec4a4b1e76679f30.jpg",
        video: "rickgrimesedit.mp4",
        show: "Walking Dead",
        bio: "A former sheriff's deputy who wakes from a coma into a zombie apocalypse and becomes the leader of a group of survivors.",
        gender: "Male", role: "Leader", species: "The Ones Who Live", powers: "Leadership Ruthless Survivalist Tactical", origin: " Revolver Machete Teeth", affiliations: "Atlanta Farm Prison Alexandria",
    },
    {
        name: "Bullseye",
        image: "https://i.pinimg.com/736x/fb/e3/ca/fbe3caafce1b3fe3d33ee72206926735.jpg",
        video: "bullseyeedit.mp4",
        show: "MCU",
        bio: "A deadly assassin with perfect aim who never misses a target. One of Daredevil's most dangerous and unpredictable enemies.",
        gender: "Male", role: "Villain", species: "Human", powers: "Precision", origin: "Earth", affiliations: "None",
    },
    {
        name: "Punisher",
        image: "https://i.pinimg.com/1200x/96/70/5b/96705b08bc8692fc8a7fdd1c5280c2ec.jpg",
        video: "punisheredit.mp4",
        show: "MCU",
        bio: "Frank Castle is a war veteran turned vigilante who wages a one-man war on crime after his family is murdered.",
        gender: "Male", role: "Anti-Hero", species: "Human", powers: "Combat/Weapons", origin: "Earth", affiliations: "None",
    },
    {
        name: "Invincible",
        image: "https://i.pinimg.com/736x/4d/28/95/4d28958c6e73a075a31a6f0a86b43891.jpg",
        video: "markedit.mp4",
        show: "Invincible",
        bio: "Mark Grayson is a teenager who inherits superpowers from his father and must navigate the brutal reality of being a superhero.",
        gender: "Male", role: "Hero", species: "Half-Viltrumite", powers: "Flight/Strength", origin: "Earth", affiliations: "Teen Team",
    },
    {
        name: "Omni-Man",
        image: "https://i.pinimg.com/736x/51/5c/8e/515c8eb940646c37677be05a8b001392.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/38/44/e1/3844e1327ed922b288c63891b8b414e2.jpg",
        show: "Invincible",
        bio: "Nolan Grayson is one of the most powerful beings on Earth, hiding a dark agenda behind his heroic facade.",
        gender: "Male", role: "Villain", species: "Viltrumite", powers: "Flight/Strength", origin: "Viltrum", affiliations: "Viltrum Empire",
    },
    {
        name: "Michael Scofield",
        image: "https://static.wikia.nocookie.net/prisonbreak/images/7/72/Michaelscofieldtattoo.jpg/revision/latest?cb=20061129185034",
        backgroundimg: "https://i.pinimg.com/736x/3f/7f/b0/3f7fb0d240091b551b1630486579fbd8.jpg",
        show: "Prison Break",
        bio: "A structural engineer who gets himself incarcerated to break his wrongly convicted brother out of death row.",
        gender: "Male", role: "Hero", species: "Human", powers: "Genius Intellect", origin: "Earth", affiliations: "None",
    },
    {
        name: "Foggy Nelson",
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/3d/Foggy_Nelson_Infobox.png/revision/latest?cb=20250305135359",
        backgroundimg: "https://static.wikia.nocookie.net/marvel-cinematic-universe-guide/images/9/92/Foggy_Nelson.png/revision/latest?cb=20181102134652",
        show: "MCU",
        bio: "Matt Murdock's best friend and law partner who provides the moral compass and comic relief in their fight for justice.",
        gender: "Male", role: "Hero", species: "Human", powers: "None", origin: "Earth", affiliations: "Murdock & Page",
    },
    {
        name: "Iron-Man",
        image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:512,cw:2048,ch:2048,q:80,w:2048/ZvJSBXg4cW6WN4S4xrVuf4.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/a3/f1/aa/a3f1aa188ffb2b68d739f4ebb8a54263.jpg",
        show: "MCU",
        bio: "Tony Stark is a genius billionaire who builds a powered suit of armor and becomes one of Earth's mightiest heroes.",
        gender: "Male", role: "Hero", species: "Human", powers: "Tech/Suit", origin: "Earth", affiliations: "Avengers",
    },
    {
        name: "Spider-Man",
        image: "https://i.abcnewsfe.com/a/27cf59aa-603b-4ef2-82eb-4895b70baa04/holland-gty-er-250922_1758554366391_hpMain_16x9.jpg?w=1600",
        backgroundimg: "https://i.pinimg.com/736x/39/96/b2/3996b2b8aafd9e51006a874ed979aa0e.jpg",
        show: "MCU",
        bio: "Peter Parker is a high school student bitten by a radioactive spider who balances saving New York with everyday life.",
        gender: "Male", role: "Hero", species: "Human Mutate", powers: "Wall-Crawling/Webs", origin: "Earth", affiliations: "Avengers",
    },
    {
        name: "Hulk",
        image: "https://www.looper.com/img/gallery/every-hulk-movie-ranked-from-worst-to-best/intro-1555712816.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/ae/71/68/ae7168628bc2326944e6f42b8be2ef80.jpg",
        show: "MCU",
        bio: "Dr. Bruce Banner transforms into a massive green powerhouse when angered, making him one of the Avengers' most powerful members.",
        gender: "Male", role: "Hero", species: "Human Mutate", powers: "Strength/Rage", origin: "Earth", affiliations: "Avengers",
    },
    {
        name: "Captain-America",
        image: "https://i.pinimg.com/1200x/07/61/0b/07610b98cab555e9a95f7d89671d241b.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/92/4c/c0/924cc03d95f7494c81d622f45e024722.jpg",
        show: "MCU",
        bio: "Steve Rogers is a World War II super soldier who stands as a symbol of justice and selflessness across decades.",
        gender: "Male", role: "Hero", species: "Human", powers: "Super Soldier", origin: "Earth", affiliations: "Avengers",
    },
    {
        name: "Thor",
        image: "https://i.pinimg.com/1200x/0d/78/8e/0d788e064ef0f48c6fa6786dbad0869f.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/8d/87/0b/8d870ba05ce829d1f5580bed498c8a14.jpg",
        show: "MCU",
        bio: "The Asgardian god of thunder who wields the legendary hammer Mjolnir and protects both Asgard and Earth.",
        gender: "Male", role: "Hero", species: "Asgardian", powers: "Lightning/Strength", origin: "Asgard", affiliations: "Avengers",
    },
    {
        name: "Black-Widow",
        image: "https://i.pinimg.com/1200x/bc/b3/e9/bcb3e9c626c834b357f1d15e62634cad.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/30/fd/e1/30fde1148bb30f8aaa6c241d1d2dee8e.jpg",
        show: "MCU",
        bio: "Natasha Romanoff is a former Russian spy turned S.H.I.E.L.D. agent and Avenger, a master of espionage and combat.",
        gender: "Female", role: "Hero", species: "Human", powers: "Combat/Espionage", origin: "Earth", affiliations: "Avengers",
    },
    {
        name: "Hawkeye",
        image: "https://i.pinimg.com/736x/ea/00/79/ea00794de0db3285a259351fa1ad1fa2.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/17/c6/77/17c67788a82a7237599b858a9fb66ae7.jpg",
        show: "MCU",
        bio: "Clint Barton is a master archer and one of the founding Avengers, relying on skill and precision over superpowers.",
        gender: "Male", role: "Hero", species: "Human", powers: "Archery", origin: "Earth", affiliations: "Avengers",
    },
    {
        name: "Darth Vader",
        image: "https://i.pinimg.com/1200x/55/b4/86/55b486b6a70fe9d7850fa77e6a7feb78.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/ce/33/f9/ce33f9d9b298bf65104d3f43757cd6a3.jpg",
        show: "Star Wars",
        bio: "Once the heroic Anakin Skywalker, he fell to the dark side and became the most feared enforcer in the galaxy.",
        gender: "Male", role: "Villain", species: "Human", powers: "Force/Lightsaber", origin: "Tatooine", affiliations: "Empire",
    },
    {
        name: "Luke Skywalker",
        image: "https://i.pinimg.com/1200x/d1/72/de/d172de1ed4cbe08f4f193b7b7bdfb085.jpg",
        backgroundimg: "https://i.pinimg.com/736x/37/26/9a/37269ad7e0ba5bfad61dda147397afe6.jpg",
        show: "Star Wars",
        bio: "A farm boy from Tatooine who discovers his destiny as a Jedi and leads the Rebellion against the Empire.",
        gender: "Male", role: "Hero", species: "Human", powers: "Force/Lightsaber", origin: "Tatooine", affiliations: "Rebellion",
    },
    {
        name: "Negan Smith",
        image: "https://i.pinimg.com/736x/e3/80/5b/e3805b9c6e22309cac9d723893e1336b.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/5e/25/d5/5e25d5ddf69875eaf9a2fd5a664c9373.jpg",
        show: "Walking Dead",
        bio: "The charismatic and brutal leader of the Saviors who rules through fear, wielding his barbed wire bat Lucille.",
        gender: "Male", role: "Antagonist/Leader", species: "Dead City", powers: "Leadership Control", origin: "Lucille Bat", affiliations: "Sanctuary Commonwealth",
    },
    {
        name: "Homelander",
        image: "https://i.pinimg.com/1200x/17/0b/fa/170bfa117932e6f1bc54e643a6d40b7c.jpg",
        backgroundimg: "https://i.pinimg.com/736x/dd/cc/14/ddcc14e6e2fc99e50670a3e8b487a40b.jpg",
        show: "The Boys",
        bio: "The most powerful superhero in the world — and the most dangerous. A narcissist hiding madness behind a perfect smile.",
        gender: "Male", role: "Villain", species: "Human Mutate", powers: "Flight/Laser Eyes", origin: "Earth", affiliations: "The Seven",
    },
    {
        name: "Conquest",
        image: "https://i.pinimg.com/736x/bc/98/c2/bc98c2f44f7dcf1bbee9f91f422f9037.jpg",
        video: "conquestedit.mp4",
        show: "Invincible",
        bio: "A ruthless Viltrumite warrior from Invincible, driven purely by violence and conquest, and known for his brutal, unstoppable nature.",
        gender: "Male", role: "Villain", species: "Viltrumite", powers: "Flight/Strength", origin: "Viltrum", affiliations: "Viltrum Empire",
    },
    {
        name: "Wilson-Fisk",
        image: "https://i.pinimg.com/736x/a8/ac/85/a8ac857454b8950780a7e6153d87bfbd.jpg",
        backgroundimg: "https://static0.srcdn.com/wordpress/wp-content/uploads/2026/03/vincent-d-onofrio-in-a-white-powerful-suit-as-wilson-fisk-kingpin-in-daredevil-born-again-season-2.jpg?w=1600&h=900&fit=crop",
        show: "MCU",
        bio: "A powerful crime lord who hides ruthless control behind a calm, calculated demeanor, manipulating the city from the shadows.",
        gender: "Male", role: "Villain", species: "Human", powers: "Strength", origin: "Earth", affiliations: "Crime Syndicate",
    },
    {
        name: "Maggie Rhee",
        image: "https://i.pinimg.com/736x/d7/11/d1/d711d1e49b0108dfaee0bad27701479f.jpg",
        backgroundimg: "https://i.pinimg.com/736x/46/0e/2e/460e2e3d45189571b06290ccd863c98f.jpg",
        show: "Walking Dead",
        bio: "A resilient survivor who evolves from a compassionate farm girl into a hardened and capable leader. Driven by loss and loyalty, she balances empathy with strength, becoming one of the most determined figures in the fight to protect her people.",
        gender: "Female", role: "Leader", species: "Dead City", powers: "Leadership", origin: "Gun Knives", affiliations: "Farm Prison Alexandria Hilltop Commonwealth",
    },
    {
        name: "Dean Winchester",
        image: "https://i.pinimg.com/736x/d6/9a/a6/d69aa603e1acb2bac13eecd90b13cdc6.jpg",
        video: "dean.mp4",
        show: "Supernatural",
        bio: "A fearless hunter who lives to fight monsters and protect his family, masking deep emotional scars with humor, bravado, and unwavering loyalty.",
        gender: "Male", role: "Hero", species: "Human", powers: "Combat/Hunting", origin: "Earth", affiliations: "Hunters",
    },
    {
        name: "Sam Winchester",
        image: "https://i.pinimg.com/1200x/1e/1a/91/1e1a919b997e7caaf9bc2674f52fad8d.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/5f/62/c8/5f62c8eb70d59041de6872fcb2ac01f8.jpg",
        show: "Supernatural",
        bio: "A thoughtful hunter who fights monsters alongside his brother, driven by empathy and inner conflict while struggling with a darker side within himself.",
        gender: "Male", role: "Hero", species: "Human", powers: "Psychic/Hunting", origin: "Earth", affiliations: "Hunters",
    },
    {
        name: "Billy Butcher",
        image: "https://i.pinimg.com/1200x/64/07/43/640743ab0166876445959c988dad5bf8.jpg",
        video: "butcher.mp4",
        show: "The Boys",
        bio: "A ruthless, foul-mouthed vigilante who hunts corrupt superheroes, driven by revenge and a willingness to cross any line to get the job done.",
        gender: "Male", role: "Anti-Hero", species: "Human", powers: "Temp-V/Combat", origin: "Earth", affiliations: "The Boys",
    },
    {
        name: "Anakin Skywalker",
        image: "https://i.pinimg.com/1200x/0c/4c/f1/0c4cf143b48448f1fda928c2bad6471a.jpg",
        video: "anakin.mp4",
        show: "Star Wars",
        bio: "A powerful and conflicted warrior, driven by love and fear, whose struggle with loss and control leads him down a dark path.",
        gender: "Male", role: "Anti-Hero", species: "Human", powers: "Force/Lightsaber", origin: "Tatooine", affiliations: "Jedi/Sith",
    },
    {
        name: "Marty Mauser",
        image: "https://i.pinimg.com/736x/d6/7c/d2/d67cd289045e394aecc957e8af15b202.jpg",
        backgroundimg: "https://i.pinimg.com/736x/71/05/01/710501ab64551c532c9992af77fdcff9.jpg",
        show: "Movie",
        bio: "A confident, over-the-top fighter with a flashy personality, blending skill, ego, and humor while always trying to prove he's the best in the room.",
        gender: "Male", role: "Villain", species: "Human", powers: "Combat", origin: "Earth", affiliations: "None",
    },
    {
        name: "Paul Atreides",
        image: "https://i.pinimg.com/736x/9b/e5/7e/9be57e8894c39c16f4814b69f656405a.jpg",
        video: "Download.mp4",
        show: "Movie",
        bio: "A gifted and burdened young leader, torn between destiny and identity, as he rises to power driven by prophecy, survival, and revenge.",
        gender: "Male", role: "Hero", species: "Human", powers: "Prescience/Combat", origin: "Caladan", affiliations: "Fremen",
    },
    {
        name: "The Deep",
        image: "https://i.pinimg.com/736x/13/dc/1b/13dc1b8af41dce09d9783e3928d99634.jpg",
        video: "deep.mp4",
        show: "The Boys",
        bio: "A flawed, self-absorbed superhero who tries to maintain his image while constantly making poor choices, often exposing his insecurity beneath the surface.",
        gender: "Male", role: "Villain", species: "Human Mutate", powers: "Aquatic Telepathy", origin: "Earth", affiliations: "The Seven",
    },
    {
        name: "Caesar",
        image: "https://i.pinimg.com/736x/17/63/55/176355320d0c70820880e6696f2a635e.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/66/b7/15/66b7158bd7799a9166f33a0f6197413d.jpg",
        show: "Movie",
        bio: "A highly intelligent and compassionate leader who rises from captive ape to revolutionary figure, guiding his kind with wisdom, restraint, and a strong moral compass.",
        gender: "Male", role: "Hero", species: "Ape", powers: "Genius Intellect/Leadership", origin: "Earth", affiliations: "Ape Colony",
    },
    {
        name: "Arthur Morgan",
        image: "https://i.pinimg.com/1200x/80/ff/9f/80ff9f2acc898871a32aa503a56c9a1a.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/91/30/07/9130075943dc49e81509d165638f047b.jpg",
        show: "Red Dead Redemption",
        bio: "A hardened outlaw with a strong sense of loyalty, struggling between his violent past and a growing desire for redemption as he questions the life he's lived.",
        gender: "Male", role: "Anti-Hero", species: "Human", powers: "Combat/Survival", origin: "Earth", affiliations: "Van der Linde Gang",
    },
    {
        name: "Superman",
        image: "https://i.pinimg.com/1200x/5e/a4/8b/5ea48bd813151f88ad2d97f29fb4df50.jpg",
        backgroundimg: "https://i.pinimg.com/736x/62/77/52/627752cbb610a9842f27ebb56698eb23.jpg",
        show: "DC",
        bio: "An immensely powerful hero driven by compassion and moral conviction, dedicated to protecting humanity while balancing alien origins with a deeply human sense of justice.",
        gender: "Male", role: "Hero", species: "Kryptonian", powers: "Flight/Strength/Heat Vision", origin: "Krypton", affiliations: "Justice League",
    },
    {
        name: "Batman",
        image: "https://i.pinimg.com/736x/fc/49/fe/fc49fef80f27f04a24346ece533199e8.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/51/8e/fc/518efcace2777132434267812afad8ca.jpg",
        show: "DC",
        bio: "A dark, highly trained vigilante who uses fear, intelligence, and preparation to fight crime after a tragic past.",
        gender: "Male", role: "Hero", species: "Human", powers: "Tech/Combat", origin: "Earth", affiliations: "Justice League",
    },
    {
        name: "Joker",
        image: "https://i.pinimg.com/736x/f8/06/d3/f806d30923ce140cc6f7c3750500f7ef.jpg",
        backgroundimg: "https://i.pinimg.com/736x/63/71/ba/6371ba660dcaa3203bf96d38a4cc0651.jpg",
        show: "DC",
        bio: "A chaotic mastermind who thrives on anarchy, unpredictability, and exposing society's flaws.",
        gender: "Male", role: "Villain", species: "Human", powers: "Chaos/Manipulation", origin: "Earth", affiliations: "None",
    },
    {
        name: "Deadpool",
        image: "https://i.pinimg.com/736x/f2/90/d8/f290d8849213a444c48fda645be63d97.jpg",
        backgroundimg: "https://i.pinimg.com/736x/97/a9/ed/97a9ed7af5ade2ea68b6d4c5108e9a11.jpg",
        show: "MCU",
        bio: "A sarcastic, unpredictable mercenary with healing powers and a constant break of the fourth wall.",
        gender: "Male", role: "Anti-Hero", species: "Human Mutate", powers: "Regeneration", origin: "Earth", affiliations: "None",
    },
    {
        name: "Thanos",
        image: "https://i.pinimg.com/1200x/50/4d/96/504d96fe94bd23d27c2e407b2d701769.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/cb/e8/7e/cbe87e41b93e90878595fd90cb7fbc49.jpg",
        show: "MCU",
        bio: "A powerful titan convinced that destruction is necessary to restore balance to the universe.",
        gender: "Male", role: "Villain", species: "Eternal Deviant", powers: "Infinity Gauntlet", origin: "Titan", affiliations: "Black Order",
    },
    {
        name: "Thomas Shelby",
        image: "https://i.pinimg.com/736x/c2/5a/e4/c25ae4d3f7858e110b39a321aa0ad6bb.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/57/66/0f/57660ff2e2be6753191f3265519226f1.jpg",
        show: "Peaky Blinders",
        bio: "A calculated and coldly intelligent gang leader who builds power through strategy, control, and emotional detachment while hiding deep trauma beneath ambition and discipline.",
        gender: "Male", role: "Anti-Hero", species: "Human", powers: "Strategy/Combat", origin: "Earth", affiliations: "Peaky Blinders",
    },
    {
        name: "Mandalorian",
        image: "https://i.pinimg.com/1200x/78/2b/3b/782b3bba4346daca9d4497c9dacc5558.jpg",
        backgroundimg: "https://i.pinimg.com/736x/cf/8e/80/cf8e802fa6540b34ef3540530dddbc6e.jpg",
        show: "Star Wars",
        bio: "A lone, disciplined bounty hunter bound by a strict code, who slowly shifts from isolation to protectiveness as he becomes a guardian figure while surviving a dangerous galaxy.",
        gender: "Male", role: "Hero", species: "Human", powers: "Combat/Tech", origin: "Mandalore", affiliations: "Mandalorians",
    },
    {
        name: "Star-Lord",
        image: "https://i.pinimg.com/736x/26/9d/3e/269d3ee4d45163b811e675447c3e1080.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/91/63/7c/91637ca25c44d627861b3724550166f1.jpg",
        show: "MCU",
        bio: "A sarcastic, music-loving space outlaw who leads a misfit team, blending charm, recklessness, and unexpected bravery to save the galaxy.",
        gender: "Male", role: "Hero", species: "Human Celestial", powers: "Tech/Combat", origin: "Earth", affiliations: "Guardians",
    },
    {
        name: "Governor",
        image: "https://i.pinimg.com/1200x/81/f5/d1/81f5d1d2f95d75feb904a17e303b8fb4.jpg",
        backgroundimg: "https://i.pinimg.com/736x/64/a6/81/64a681a277f1efb489efe1665b1ac03b.jpg",
        show: "Walking Dead",
        bio: "A charismatic but ruthless leader who hides cruelty and obsession behind a calm, persuasive exterior while building control through fear and manipulation.",
        gender: "Male", role: "Antagonist/Leader", species: "None", powers: "Manipulation Leadership Ruthlessness", origin: "Assualt Rifle Handgun Tank", affiliations: "Woodbury",
    },
    {
        name: "Shane Walsh",
        image: "https://i.pinimg.com/736x/d6/ca/8e/d6ca8e8aa5e1503b08ebc8f1988c6e50.jpg",
        backgroundimg: "https://i.pinimg.com/736x/54/0e/e9/540ee976e0b7e7c7b4a4aa009247f0fb.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Male", role: "Antagonist/Leader", species: "None", powers: "Survalist Impulsive Tactical Agressive", origin: "Handgun Shotgun", affiliations: "Atlanta Farm",
    },
    {
        name: "Carol Peletier",
        image: "https://i.pinimg.com/736x/78/43/14/7843147f6fa57bd2c45041ea6cb25c4c.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/68/a3/c7/68a3c762f23bef31c8e8a25ed13b13a5.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Female", role: "Strategist", species: "Daryl Dixon", powers: "Survalist Tactical", origin: "Assualt Rifle Handgun", affiliations: "Atlanta Farm Prison Alexandria Kingdom Commonwealth",
    },
    {
        name: "Glenn Rhee",
        image: "https://i.pinimg.com/736x/1b/97/bd/1b97bd955ce21f81a8b44147990d7692.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/74/ad/9e/74ad9e8554adbfdc7df059e70612c226.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Male", role: "Support/Survivor", species: "None", powers: "Survalist", origin: "Handgun", affiliations: "Atlanta Farm Prison Alexandria",
    },
    {
        name: "Merle Dixon",
        image: "https://i.pinimg.com/1200x/c6/3b/ba/c63bba7485716ba28c16f03619506ef1.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/82/38/56/823856d17fe4797ff9c60f4016271628.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Male", role: "Outsider/Lieutenant ", species: "None", powers: "Unstable Survalist", origin: "Handgun Prosthetic Arm", affiliations: "Atlanta Woodbury Prison",
    },
    {
        name: "Sasha Willaims",
        image: "https://i.pinimg.com/736x/a8/41/12/a84112aa0bb4f42dcddb7a81ef315a59.jpg",
        backgroundimg: "https://i.pinimg.com/736x/dc/b3/d9/dcb3d9919399bec59feaacac1bf130cb.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Female", role: "Survivor/Sharpshooter", species: "None", powers: "Sharpshooter Survalist", origin: "Assualt Rifle Sniper Rifle", affiliations: "Woodbury Prison Alexandria",
    },
    {
        name: "Rosita Espinosa",
        image: "https://i.pinimg.com/1200x/d5/78/2b/d5782bf77cbaa39a5fce454025608771.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/c7/6e/f9/c76ef9162c99f4f8e97350a5279db1b5.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Female", role: "Survivor/Ex-Military", species: "None", powers: "Survalist Tactical", origin: " Handgun Macuahuitl ", affiliations: "Alexandria Hilltop Commonwealth",
    },
    {
        name: "Abraham Ford",
        image: "https://i.pinimg.com/1200x/1e/2e/d2/1e2ed25d4773bcc556a1df5ba9a9d25f.jpg",
        backgroundimg: "https://i.pinimg.com/736x/c2/6c/76/c26c76e6557a4a96fbdf8d9acae63d71.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Male", role: "Survivor/Ex-Military", species: "None", powers: "Survalist Brute-Force", origin: "Assault Rifle Handgun", affiliations: "Alexandria",
    },
    {
        name: "Hershel Greene",
        image: "https://i.pinimg.com/1200x/1a/52/8d/1a528d063f2b84312ebe2037bffec886.jpg",
        backgroundimg: "https://i.pinimg.com/736x/95/00/fd/9500fd6412483f94970257a9876c9af0.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Male", role: "Doctor", species: "None", powers: "Medical", origin: "Shotgun", affiliations: "Farm Prison",
    },
    {
        name: "Eugene Porter",
        image: "https://i.pinimg.com/1200x/22/98/f5/2298f56f3bac49cb664dd810abae9f85.jpg",
        backgroundimg: "https://i.pinimg.com/736x/f2/08/8d/f2088dc1cb5c1b7c0ff66bf2ef76e351.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Male", role: "Bullet Maker/Strategist", species: "None", powers: "Strategist Tactical ", origin: "None", affiliations: "Alexandria Commonwealth Hilltop Sanctuary",
    },
    {
        name: "Carl Grimes",
        image: "https://i.pinimg.com/736x/3d/8a/56/3d8a56427fcbd78763e18750f6e68c96.jpg",
        backgroundimg: "https://i.pinimg.com/736x/a3/d5/0d/a3d50db2467cb6d08b9d877186a4149e.jpg",
        show: "Walking Dead",
        bio: "A tough, impulsive survivor whose loyalty and protectiveness gradually give way to obsession and conflict as the world collapses around him.",
        gender: "Male", role: "Protector/Survivor", species: "None", powers: "Surviavlist", origin: "Handgun", affiliations: "Atlanta Farm Prison Alexandria",
    },
    {
        name: "John Marston",
        image: "https://i.pinimg.com/736x/08/c5/50/08c550a2baa03203ba92dfeebfce2571.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/74/61/00/7461004b9e5704604e0e9b7360c8b612.jpg",
        show: "Red Dead Redemption",
        bio: "A hardened outlaw with a strong sense of loyalty, struggling between his violent past and a growing desire for redemption as he questions the life he's lived.",
        gender: "Male", role: "Outlaw", species: "Human", powers: "Combat/Survival", origin: "Earth", affiliations: "Van der Linde Gang",
    },
    {
        name: "Alexander Mahone",
        image: "https://i.pinimg.com/736x/0e/64/df/0e64df030320fc7e3e3723ab1f89f8b3.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/39/43/93/394393f5554403137a6180b96d1e88a3.jpg",
        show: "Prison Break",
        bio: "A structural engineer who gets himself incarcerated to break his wrongly convicted brother out of death row.",
        gender: "Male", role: "Hero", species: "Human", powers: "Genius Intellect", origin: "Earth", affiliations: "None",
    },
     {
        name: "Rex-Splode",
        image: "https://i.pinimg.com/736x/bd/8c/ab/bd8cab3ba1530dfa260f3789f7946f10.jpg",
        backgroundimg: "https://i.pinimg.com/1200x/ba/15/8f/ba158f8f6f4b80254d8138df42e28dfe.jpg",
        show: "Invincible",
        bio: "Mark Grayson is a teenager who inherits superpowers from his father and must navigate the brutal reality of being a superhero.",
        gender: "Male", role: "Hero", species: "Human", powers: "Splode...", origin: "Earth", affiliations: "Teen Team",
    },
    



    

    // Add more characters here:
    // { name: "Character Name", image: "images/yourimage.jpg", backgroundimg: "url", show: "Show Name", bio: "Description here.", gender: "", role: "", species: "", powers: "", origin: "", affiliations: "" },
];
 
// --- Don't edit below this line ---
 
let activeCard = null;
const userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
 
// --- Star Rating ---
function renderStars(charName) {
    const container = document.getElementById('info-stars');
    const ratingDisplay = document.getElementById('info-rating');
    const current = userRatings[charName] || 0;
    container.innerHTML = '';
 
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
 
        if (current >= i) {
            star.textContent = '★';
            star.classList.add('full');
        } else if (current >= i - 0.5) {
            star.textContent = '⯨';
            star.classList.add('half');
        } else {
            star.textContent = '☆';
        }
 
        star.addEventListener('click', (e) => {
            const rect = star.getBoundingClientRect();
            const isLeftHalf = e.clientX < rect.left + rect.width / 2;
            userRatings[charName] = isLeftHalf ? i - 0.5 : i;
            localStorage.setItem('userRatings', JSON.stringify(userRatings));
            updateCardRating(charName);
            renderStars(charName);
        });
 
        star.addEventListener('mousemove', (e) => {
            const rect = star.getBoundingClientRect();
            const isLeftHalf = e.clientX < rect.left + rect.width / 2;
            previewStars(i - (isLeftHalf ? 0.5 : 0));
        });
 
        star.addEventListener('mouseleave', () => {
            renderStars(charName);
        });
 
        container.appendChild(star);
    }
 
    ratingDisplay.textContent = current ? `${current} / 5` : 'Not rated';
}
 
function previewStars(value) {
    const stars = document.querySelectorAll('#info-stars .star');
    stars.forEach((star, index) => {
        const i = index + 1;
        if (value >= i) {
            star.textContent = '★';
            star.style.color = '#ff2e2e';
        } else if (value >= i - 0.5) {
            star.textContent = '⯨';
            star.style.color = '#ff2e2e';
        } else {
            star.textContent = '☆';
            star.style.color = '#444';
        }
    });
}
 
function updateCardRating(charName) {
    document.querySelectorAll('.card').forEach(card => {
        if (card.dataset.charName === charName) {
            let ratingEl = card.querySelector('.card-rating');
            if (!ratingEl) {
                ratingEl = document.createElement('div');
                ratingEl.className = 'card-rating';
                card.appendChild(ratingEl);
            }
            const val = userRatings[charName];
            ratingEl.textContent = val ? '★ ' + val : '';
        }
    });
    renderStats();
}
 
// --- Stats Chart ---
function renderStats() {
    const barsContainer = document.getElementById('stats-bars');
    const watchedEl = document.getElementById('stats-watched');
    if (!barsContainer) return;
 
    const buckets = {};
    for (let i = 0.5; i <= 5; i += 0.5) buckets[i] = 0;
 
    let watched = 0;
    Object.entries(userRatings).forEach(([charName, rating]) => {
        if (rating) {
            watched++;
            buckets[rating] = (buckets[rating] || 0) + 1;
        }
    });
 
    watchedEl.textContent = watched;
 
    const vals = Object.values(buckets);
    const max = Math.max(...vals, 1);
 
    barsContainer.innerHTML = '';
    Object.entries(buckets).sort((a, b) => parseFloat(a[0]) - parseFloat(b[0])).forEach(([rating, count]) => {
        const wrap = document.createElement('div');
        wrap.className = 'stats-bar-wrap';
 
        const bar = document.createElement('div');
        bar.className = 'stats-bar';
        bar.style.height = `${(count / max) * 100}%`;
 
        const tooltip = document.createElement('div');
        tooltip.className = 'stats-tooltip';
        tooltip.textContent = `★ ${rating} — ${count} character${count !== 1 ? 's' : ''}`;
 
        wrap.appendChild(tooltip);
        wrap.appendChild(bar);
        barsContainer.appendChild(wrap);
    });
}
function renderWins() {
    const list = document.getElementById('wins-list');
    if (!list) return;
    const wins = JSON.parse(localStorage.getItem('bracketWins') || '{}');
    const sorted = Object.entries(wins).sort((a, b) => b[1] - a[1]);
    if (sorted.length === 0) {
        list.innerHTML = '<p style="color:#555;font-size:0.8rem;">No bracket wins yet</p>';
        return;
    }
    list.innerHTML = sorted.map(([name, count]) => {
        const char = characters.find(c => c.name === name);
        return `
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                <img src="${char?.image || ''}" style="width:36px;height:36px;border-radius:8px;object-fit:cover;object-position:top;">
                <div>
                    <div style="font-size:0.85rem;font-weight:700;">${name}</div>
                    <div style="font-size:0.7rem;color:#888;">👑 ${count} win${count > 1 ? 's' : ''}</div>
                </div>
            </div>
        `;
    }).join('');
}
renderWins();
 
// --- Info Popup ---
function openInfoPopup(char) {
    document.getElementById('info-name').textContent = char.name;
    document.getElementById('info-show').textContent = char.show;
    document.getElementById('info-bio').textContent = char.bio || 'No description available.';
 
    const imageEl = document.getElementById('info-image');
 
    if (char.video) {
        imageEl.innerHTML = `
            <video autoplay loop playsinline style="width:100%;height:100%;object-fit:cover;">
                <source src="${char.video}" type="video/mp4">
            </video>`;
        imageEl.style.backgroundImage = '';
    } else {
        imageEl.innerHTML = '';
        imageEl.style.backgroundImage = `url(${char.backgroundimg || char.image})`;
    }
 
    renderStars(char.name);
    document.getElementById('info-modal').style.display = 'flex';
}
 
// --- Edit Modal ---
function openModal(card) {
    activeCard = card;
    document.getElementById('search-input').value = '';
    renderResults(characters);
    document.getElementById('edit-modal').style.display = 'flex';
}
 
function closeModal() {
    document.getElementById('edit-modal').style.display = 'none';
    activeCard = null;
}
 
function setCharacter(card, char) {
    card.style.backgroundImage = `url(${char.image})`;
    card.querySelector('.card-label').textContent = char.name;
    card.classList.remove('empty');
    card.dataset.charName = char.name;
    card.querySelector('.card-add-btn').style.display = 'none';
    localStorage.setItem('slot-' + card.dataset.slot, char.name);
}
 
function renderResults(list) {
    const container = document.getElementById('search-results');
    container.innerHTML = '';
    list.forEach(char => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <img src="${char.image}" alt="${char.name}" />
            <span>${char.name}</span>
            <small>${char.show}</small>
        `;
        item.addEventListener('click', () => {
            if (activeCard) setCharacter(activeCard, char);
            closeModal();
        });
        container.appendChild(item);
    });
}
 
document.addEventListener('DOMContentLoaded', () => {
 
    document.querySelectorAll('.card').forEach(card => {
 
        const addBtn = document.createElement('button');
        addBtn.className = 'card-add-btn';
        addBtn.textContent = '+';
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(card);
        });
        card.appendChild(addBtn);
 
        const editBtn = document.createElement('button');
        editBtn.className = 'card-edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.style.display = 'none';
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(card);
        });
        card.appendChild(editBtn);
 
        card.addEventListener('click', () => {
            if (card.classList.contains('empty')) return;
            const char = characters.find(c => c.name === card.dataset.charName);
            if (char) openInfoPopup(char);
        });
 
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('empty')) {
                editBtn.style.display = 'block';
            }
        });
        card.addEventListener('mouseleave', () => {
            editBtn.style.display = 'none';
        });
    });
 
    document.querySelectorAll('.card[data-slot]').forEach(card => {
        const saved = localStorage.getItem('slot-' + card.dataset.slot);
        if (saved) {
            const char = characters.find(c => c.name === saved);
            if (char) setCharacter(card, char);
        }
    });
 
    document.querySelectorAll('.card:not(.empty)').forEach(card => {
        const charName = card.dataset.charName;
        if (charName && userRatings[charName]) {
            let ratingEl = card.querySelector('.card-rating');
            if (!ratingEl) {
                ratingEl = document.createElement('div');
                ratingEl.className = 'card-rating';
                card.appendChild(ratingEl);
            }
            ratingEl.textContent = '★ ' + userRatings[charName];
        }
    });
 
    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = characters.filter(c =>
            c.name.toLowerCase().includes(query) ||
            c.show.toLowerCase().includes(query)
        );
        renderResults(filtered);
    });
 
    document.getElementById('edit-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('edit-modal')) closeModal();
    });
 
    document.getElementById('info-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('info-modal')) closeInfoPopup();
    });
 
    renderStats();
});
 
function closeInfoPopup() {
    const imageEl = document.getElementById('info-image');
    const video = imageEl.querySelector('video');
    if (video) {
        video.pause();
        video.src = '';
        imageEl.innerHTML = '';
    }
    document.getElementById('info-modal').style.display = 'none';
}

// ─── Chardle game — only runs on chardle.html ─────────────────────────────────
if (document.getElementById('show-grid')) {

// ─── Attributes to compare ────────────────────────────────────────────────────
const SHOW_ATTRS = {
    'Walking Dead': [
        { key: 'gender',       label: 'Gender' },
        { key: 'role',         label: 'Role' },
        { key: 'species',      label: 'Spin OFf' },
        { key: 'powers',       label: 'Skills' },
        { key: 'origin',       label: 'Weapons' },
        { key: 'affiliations', label: 'Groups' },
    ],
    'Peaky Blinders': [
        { key: 'gender',       label: 'Gender' },
        { key: 'role',         label: 'Role' },
        { key: 'species',      label: 'Species' },
        { key: 'powers',       label: 'Skills' },
        { key: 'origin',       label: 'Origin' },
        { key: 'affiliations', label: 'Gang' },
    ],
    'Prison Break': [
        { key: 'gender',       label: 'Gender' },
        { key: 'role',         label: 'Role' },
        { key: 'species',      label: 'Species' },
        { key: 'powers',       label: 'Skills' },
        { key: 'origin',       label: 'Origin' },
        { key: 'affiliations', label: 'Faction' },
    ],
};

const DEFAULT_ATTRS = [
    { key: 'gender',       label: 'Gender' },
    { key: 'role',         label: 'Role' },
    { key: 'species',      label: 'Species' },
    { key: 'powers',       label: 'Powers' },
    { key: 'origin',       label: 'Origin' },
    { key: 'affiliations', label: 'Affiliations' },
];

let ATTRS = DEFAULT_ATTRS;
 
// ─── State ─────────────────────────────────────────────────────────────────────
let selectedShow = null;
let pool = [];
let target = null;
let guessesLeft = 10;
let guessed = new Set();
let gameOver = false;
let selectedChar = null;
 
// ─── Build show selector ───────────────────────────────────────────────────────
function buildShowSelector() {
    const shows = ['All', ...new Set(characters.map(c => c.show))];
    const grid = document.getElementById('show-grid');
    shows.forEach(show => {
        const btn = document.createElement('button');
        btn.className = 'show-pill';
        btn.textContent = show;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.show-pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            startGame(show);
        });
        grid.appendChild(btn);
    });
}
 
// ─── Start game ───────────────────────────────────────────────────────────────
function startGame(show) {
    selectedShow = show;
    ATTRS = SHOW_ATTRS[show] || DEFAULT_ATTRS;
    pool = show === 'All' ? [...characters] : characters.filter(c => c.show === show);
 
    if (pool.length < 2) {
        alert('Not enough characters in this show to play!');
        return;
    }
 
    target = pool[Math.floor(Math.random() * pool.length)];
    guessesLeft = 10;
    guessed = new Set();
    gameOver = false;
    selectedChar = null;
 
    document.getElementById('active-show-label').textContent = show;
    document.getElementById('guesses-remaining').textContent = 10;
    document.getElementById('guesses-container').innerHTML = '';
    document.getElementById('guess-input').value = '';
    document.getElementById('result-banner').style.display = 'none';
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-btn').disabled = false;
 
    buildColumnsHeader();
 
    document.getElementById('game-area').style.display = 'flex';
    document.getElementById('guess-input').focus();
}
 
// ─── Column headers ────────────────────────────────────────────────────────────
function buildColumnsHeader() {
    const header = document.getElementById('columns-header');
    header.innerHTML = '<div style="width:220px; flex-shrink:0;"></div>' + ATTRS.map(a => `<div class="col-label">${a.label}</div>`).join('');
}
 
// ─── Autocomplete ──────────────────────────────────────────────────────────────
const guessInput = document.getElementById('guess-input');
const autocomplete = document.getElementById('autocomplete');
 
guessInput.addEventListener('input', () => {
    const q = guessInput.value.toLowerCase().trim();
    autocomplete.innerHTML = '';
    selectedChar = null;
    if (!q) { autocomplete.style.display = 'none'; return; }
 
    const matches = pool.filter(c =>
        c.name.toLowerCase().includes(q) && !guessed.has(c.name)
    );
 
    if (!matches.length) { autocomplete.style.display = 'none'; return; }
 
    matches.forEach(char => {
        const item = document.createElement('div');
        item.className = 'ac-item';
        item.innerHTML = `
            <img src="${char.image}" alt="${char.name}" onerror="this.style.display='none'">
            <div>
                <div class="ac-item-name">${char.name}</div>
                <div class="ac-item-show">${char.show}</div>
            </div>
        `;
        item.addEventListener('click', () => {
            selectedChar = char;
            guessInput.value = char.name;
            autocomplete.style.display = 'none';
        });
        autocomplete.appendChild(item);
    });
 
    autocomplete.style.display = 'block';
});
 
document.addEventListener('click', (e) => {
    if (!e.target.closest('.guess-input-wrap')) {
        autocomplete.style.display = 'none';
    }
});
 
// ─── Submit guess ──────────────────────────────────────────────────────────────
document.getElementById('guess-btn').addEventListener('click', submitGuess);
guessInput.addEventListener('keydown', e => { if (e.key === 'Enter') submitGuess(); });
 
function submitGuess() {
    if (gameOver) return;
 
    const char = selectedChar || pool.find(c => c.name.toLowerCase() === guessInput.value.toLowerCase().trim());
    if (!char) return;
    if (guessed.has(char.name)) return;
 
    guessed.add(char.name);
    guessesLeft--;
    document.getElementById('guesses-remaining').textContent = guessesLeft;
 
    renderGuessRow(char);
 
    guessInput.value = '';
    selectedChar = null;
    autocomplete.style.display = 'none';
 
    if (char.name === target.name) {
        endGame(true);
    } else if (guessesLeft === 0) {
        endGame(false);
    }
}
 
// ─── Render a guess row ────────────────────────────────────────────────────────
function renderGuessRow(char) {
    const container = document.getElementById('guesses-container');
    const row = document.createElement('div');
    row.className = 'guess-result-row';
 
    // Thumbnail + name wrapper
    const imgWrap = document.createElement('div');
    imgWrap.className = 'char-thumb-wrap';
 
    const img = document.createElement('img');
    img.className = 'char-thumb';
    img.src = char.image;
    img.alt = char.name;
    img.onerror = () => img.style.display = 'none';
 
    const nameLabel = document.createElement('span');
    nameLabel.className = 'char-thumb-name';
    nameLabel.textContent = char.name;
 
    imgWrap.appendChild(nameLabel);
    imgWrap.appendChild(img);
    row.appendChild(imgWrap);
 
    // Attribute cells
    ATTRS.forEach((attr, i) => {
        const cell = document.createElement('div');
        cell.className = 'attr-cell';
        cell.style.animationDelay = `${i * 0.08}s`;
 
        const guessVal = char[attr.key];
        const targetVal = target[attr.key];
 
        if (guessVal === targetVal) {
            cell.classList.add('cell-correct');
        } else {
            // Partial: check if any word overlaps
            const guessWords = guessVal.toLowerCase().split(/[\/,\s]+/);
            const targetWords = targetVal.toLowerCase().split(/[\/,\s]+/);
            const overlap = guessWords.some(w => targetWords.includes(w) && w.length > 2);
            cell.classList.add(overlap ? 'cell-partial' : 'cell-wrong');
        }
 
        cell.textContent = guessVal;
        row.appendChild(cell);
    });
 
    container.prepend(row);
}
 
// ─── End game ─────────────────────────────────────────────────────────────────
function endGame(won) {
    gameOver = true;
    document.getElementById('guess-input').disabled = true;
    document.getElementById('guess-btn').disabled = true;
 
    const banner = document.getElementById('result-banner');
    banner.style.display = 'flex';
 
    document.getElementById('result-emoji').textContent = won ? '🎉' : '💀';
    const title = document.getElementById('result-title');
    title.textContent = won ? `GOT IT IN ${10 - guessesLeft}!` : 'GAME OVER';
    title.className = 'result-title ' + (won ? 'win' : 'lose');
 
    document.getElementById('result-img').src = target.image;
    document.getElementById('result-name').textContent = target.name;
    document.getElementById('result-show').textContent = target.show;
}
 
// ─── Play again ────────────────────────────────────────────────────────────────
function playAgain() {
    startGame(selectedShow);
}
 
// ─── Init ──────────────────────────────────────────────────────────────────────
buildShowSelector();

} // end chardle-only guard
// Load saved name on page load
const savedName = localStorage.getItem('profileName');
if (savedName) document.querySelector('.profile h1').textContent = savedName;

// Click name to edit
document.querySelector('.profile h1').addEventListener('click', () => {
    const newName = prompt('Enter your name:');
    if (newName) {
        document.querySelector('.profile h1').textContent = newName;
        localStorage.setItem('profileName', newName);
    }
});
// Load saved pfp
const savedPfp = localStorage.getItem('profilePfp');
if (savedPfp) document.querySelector('.avatar').src = savedPfp;

// Click avatar to upload
document.querySelector('.avatar').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
            document.querySelector('.avatar').src = ev.target.result;
            localStorage.setItem('profilePfp', ev.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    input.click();
});
function resetData() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.85);
        z-index: 9999; display: flex; align-items: center; justify-content: center;
    `;
    modal.innerHTML = `
        <div style="
            background: #1a1a1a; border: 1px solid #333; border-radius: 16px;
            padding: 36px 40px; max-width: 420px; width: 90%; text-align: center;
            display: flex; flex-direction: column; gap: 16px;
        ">
            <h2 style="color: #ff2e2e; font-size: 1.4rem;">Reset Data</h2>
            <p style="color: #ccc; font-size: 0.95rem; line-height: 1.6;">
                Are you sure? This will clear all your cards, ratings, name and profile picture.
            </p>
            <div style="display: flex; gap: 12px; justify-content: center; margin-top: 8px;">
                <button id="confirm-reset" style="
                    background: #8b0000; color: white; border: none;
                    padding: 12px 28px; border-radius: 10px; cursor: pointer;
                    font-size: 0.95rem; transition: 0.2s;
                ">Reset</button>
                <button id="cancel-reset" style="
                    background: transparent; color: #aaa; border: 1px solid #444;
                    padding: 12px 28px; border-radius: 10px; cursor: pointer;
                    font-size: 0.95rem; transition: 0.2s;
                ">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('confirm-reset').onclick = () => {
        localStorage.clear();
        location.reload();
    };
    document.getElementById('cancel-reset').onclick = () => {
        modal.remove();
    };
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}
