/*
This is the about me section where I can introduce myself
*/
import React from 'react';

function AboutMe () {
    return (
        <section>
            <div className="card text-white bg-dark mb-3">
                <div className="card-title">About Me</div>
                <div className="card-body">
                    <p className="card-text">
                        Hi there! My name is Jean but some people know me as Nichakamol. I am a software developer with a passion for gaming and cats. Although I love all kinds of games, my favorites are Bloodborne, Dark Souls 3, Sekiro, and Elden Ring. These games are known for their difficulty, which makes them appealing to me since coding can also be challenging.
                    </p>
                    <p className="card-text">
                        I first started coding when I was studying Applied Computing in school. I have been working with Java and Python for three years now and have integrated these languages' concepts into business. Over the years, I have learned that both gaming and coding require persistence and patience. When I first started playing Souls games, I found them challenging and frustrating. But as I continued to play, I realized that the key to success is to keep going, seek assistance, and never give up.
                    </p>
                    <p className="card-text">
                        When I am not coding, I am spending quality time with my cat. I find it relaxing to sit next to her and play games or work on my coding projects. I love the adrenaline rush that comes with overcoming a difficult challenge in gaming or coding. It is a feeling of ecstasy that drives me to learn more and keep improving.
                    </p>
                    <p className="card-text">
                        In conclusion, I am a passionate developer who loves gaming and cats. I believe that persistence and patience are key to success in both gaming and coding. I look forward to continuing my coding journey and conquering more challenges while spending quality time with my feline friend.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;