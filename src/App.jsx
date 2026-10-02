import { useEffect, useRef, useState } from "react";

import Heart from "./components/Heart";
import FloatingHearts from "./components/FloatingHearts";
import Sparkles from "./components/Sparkles";
import ComfortCard from "./components/ComfortCard";

function OpeningPage({ nextPage }) {
  return (
    <section className="page opening-page">
      <div className="background-orb orb-left"></div>
      <div className="background-orb orb-right"></div>

      <div className="content">

        <p className="eyebrow">
          A little something for you...
        </p>

        <Heart size="large" />

        <p className="greeting">
          Hey Mercy... ❤️
        </p>

        <h1 className="main-title">
          I hate that
          <br />
          you're hurting.
        </h1>

        <div className="letter">

          <p>
            I've been thinking about you all day.
          </p>

          <p>
            And honestly, I hate knowing that
            you're hurting and I can't be there
            with you right now.
          </p>

          <p>
            I wish I could just be there beside
            you, even if all I could do was hold
            you and make things a little easier.
          </p>

          <p>
            I hate that your tummy hurts and I
            can't be there to wrap my arms around
            you and hold you until it eases. 🥺
          </p>

          <p className="highlight">
            I really wish I was there.
          </p>

        </div>

        <button
          className="main-button"
          onClick={nextPage}
        >
          I made something for you ❤️

          <span className="arrow">
            →
          </span>
        </button>

      </div>
    </section>
  );
}


function WhyPage({ nextPage }) {
  return (
    <section className="page">

      <div className="content">

        <p className="section-label">
          FOR YOU, MERCY
        </p>

        <Heart size="medium" />

        <h2>
          Since I can't be there in person...
        </h2>

        <div className="letter">

          <p>
            I made you a little something to
            look after you while I'm away. ❤️
          </p>

          <p>
            It's obviously not the same as
            having me beside you...
          </p>

          <p>
            But it's my little way of reminding
            you that{" "}
            <strong>
              I'm thinking about you.
            </strong>
          </p>

          <p>
            So whenever you open this, I want
            you to feel like I'm right there
            with you for a little while.
          </p>

        </div>

        <button
          className="main-button"
          onClick={nextPage}
        >
          Okay... take care of me 🥺

          <span className="arrow">
            →
          </span>
        </button>

      </div>

    </section>
  );
}


function IfICouldPage({ nextPage }) {
  return (
    <section className="page">

      <div className="content">

        <div className="blanket-illustration">

          <div className="illustration-glow"></div>

          <div className="blanket">

            <div className="blanket-fold fold-one"></div>

            <div className="blanket-fold fold-two"></div>

          </div>

          <div className="tiny-heart">
            ♥
          </div>

        </div>

        <p className="section-label">
          IF I COULD
        </p>

        <h2>
          If I could, I'd be right beside you
          right now.
        </h2>

        <div className="letter">

          <p>
            You'd have a warm blanket around you,
            your head resting on my chest, and
            I'd just hold you until you felt a
            little better.
          </p>

          <p>
            I'd rub your back, make you laugh
            when you're feeling miserable, and
            stay for as long as you needed me.
          </p>

          <p>
            Because even in the hard moments...
          </p>

          <p className="highlight">
            being near you is where I want to be. ❤️
          </p>

        </div>

        <button
          className="main-button"
          onClick={nextPage}
        >
          Stay with me a little longer ❤️

          <span className="arrow">
            →
          </span>
        </button>

      </div>

    </section>
  );
}


function StrongPage({ nextPage }) {
  return (
    <section className="page">

      <div className="content">

        <Heart size="medium" />

        <p className="section-label">
          A SOFT DAY
        </p>

        <h2>
          You don't have to be strong today. ❤️
        </h2>

        <div className="letter">

          <p>
            You're so strong, Mercy.
          </p>

          <p>
            But today,{" "}
            <strong>
              you don't have to be.
            </strong>
          </p>

        </div>

        <div className="comfort-grid">

          <ComfortCard
            icon="☁"
            title="Rest"
          >
            Take it easy today.
          </ComfortCard>

          <ComfortCard
            icon="♡"
            title="Be gentle"
          >
            You don't have to push through
            everything.
          </ComfortCard>

          <ComfortCard
            icon="☕"
            title="Take your time"
          >
            Let yourself have a soft day.
          </ComfortCard>

        </div>

        <div className="letter">

          <p>
            Just be comfortable, take things
            slowly, and give yourself permission
            to have a soft day.
          </p>

          <p>
            And even though I can't hold you in
            person right now...
          </p>

          <p className="highlight">
            know that I'm holding you in my heart. ❤️
          </p>

        </div>

        <button
          className="main-button"
          onClick={nextPage}
        >
          There's one more thing...

          <span className="arrow">
            →
          </span>
        </button>

      </div>

    </section>
  );
}


function RomanticPage({ nextPage }) {
  return (
    <section className="page romantic-page">

      <div className="content">

        <p className="section-label">
          ONE MORE THING...
        </p>

        <Heart size="small" />

        <h2>
          You've been on my mind all day.
        </h2>

        <div className="letter">

          <p>
            And somehow, thinking about you
            just keeps making me wish I was
            closer.
          </p>

          <p>
            You make my whole world feel softer
            and warmer.
          </p>

          <p>
            And I'm so lucky to have you in my
            life. ❤️
          </p>

          <p>
            So if you need me...
          </p>

          <p className="big-highlight">
            text me.
          </p>

          <p>
            Anytime.
          </p>

          <p>
            For anything.
          </p>

          <p>
            Even if it's just because you want
            to hear me tell you that I love you.
            🥺❤️
          </p>

        </div>

        <button
          className="main-button"
          onClick={nextPage}
        >
          Okay... I promise ❤️

          <span className="arrow">
            →
          </span>
        </button>

      </div>

    </section>
  );
}


function FinalPage() {
  return (
    <section className="page final-page">

      <div className="final-glow"></div>

      <div className="content">

        <Heart size="huge" />

        <p className="section-label">
          JUST MERCY
        </p>

        <h1 className="final-title">
          Now go get comfortable,
          <br />
          pretty girl. ❤️
        </h1>

        <div className="final-message">

          <p>
            I'll be here.
          </p>

          <strong>
            Always.
          </strong>

        </div>

        <p className="signature">
          — from someone who wishes he could
          be there right now 🍷
        </p>

        <div className="final-note">
          <span>♡</span>
          <span>
            Take care of yourself.
          </span>
          <span>♡</span>
        </div>

      </div>

    </section>
  );
}


export default function App() {

  const [page, setPage] = useState(1);

  const [musicStarted, setMusicStarted] =
    useState(false);

  const audioRef = useRef(null);


  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [page]);


  const startMusic = async () => {

    if (!audioRef.current) return;

    if (musicStarted) return;

    try {

      audioRef.current.volume = 0.3;

      await audioRef.current.play();

      setMusicStarted(true);

    } catch (error) {

      console.log(
        "Music could not start:",
        error
      );

    }

  };


  const nextPage = async () => {

    if (page === 1) {

      await startMusic();

    }

    setPage((currentPage) =>
      Math.min(currentPage + 1, 6)
    );

  };


  const renderPage = () => {

    switch (page) {

      case 1:
        return (
          <OpeningPage
            nextPage={nextPage}
          />
        );

      case 2:
        return (
          <WhyPage
            nextPage={nextPage}
          />
        );

      case 3:
        return (
          <IfICouldPage
            nextPage={nextPage}
          />
        );

      case 4:
        return (
          <StrongPage
            nextPage={nextPage}
          />
        );

      case 5:
        return (
          <RomanticPage
            nextPage={nextPage}
          />
        );

      case 6:
        return <FinalPage />;

      default:
        return (
          <OpeningPage
            nextPage={nextPage}
          />
        );

    }

  };


  return (

    <main
      className={`app page-${page}`}
    >

      <audio
        ref={audioRef}
        id="backgroundMusic"
        loop
        preload="auto"
      >

        <source
          src="/music/heaven-baby.mp3"
          type="audio/mpeg"
        />

      </audio>


      <Sparkles />

      <FloatingHearts
        heavy={page === 6}
      />


      <div className="page-counter">

        <span>
          {String(page).padStart(2, "0")}
        </span>

        <span className="counter-line"></span>

        <span>
          06
        </span>

      </div>


      {renderPage()}


      <div className="page-dots">

        {[1, 2, 3, 4, 5, 6].map(
          (number) => (

            <span
              key={number}
              className={
                number === page
                  ? "active"
                  : ""
              }
            />

          )
        )}

      </div>

    </main>

  );
}