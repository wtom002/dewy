import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export default function ResultsPage() {
    return (
        <div>
        <div className="banner banner-s bg-result">
        <NavBar darkMode={true} />
        <h1>take a look at your ingredient results.</h1>
        <h2>it looks like your main skin concern is: <b>ACNE</b> </h2>
        <h2>following an analysis of your skin, we recommend <b>four</b> essential ingredients...</h2>
        <Link to="/scan">
        <button>REDO ANALYSIS</button>
        </Link>
        </div>
        <h1 className="results-heading">ingredients</h1>
        <hr></hr>
        <div className="cards-container">
            <div className="cards">
            <h1>niacinamide</h1>
            <h2>Niacinamide reduces inflammation and acne by regulating oil production, minimizing pores, and preventing bacterial growth. It strengthens the skin's barrier against environmental stressors, fades acne scars, and evens out skin tone by promoting cell renewal.</h2>
            <button>READ MORE -{'>'} </button>
            </div>
            <div className="cards">
            <h1>azelaic acid</h1>
            <h2>Azelaic acid fights acne by eliminating breakout-causing bacteria, reducing inflammation, and unclogging pores. It prevents future acne by decreasing keratin production and improves skin texture by fading post-acne scars and hyperpigmentation. Additionally, it evens out skin tone, reduces redness, and effectively treats acne, rosacea, and hyperpigmentation.</h2>
            <button>READ MORE -{'>'} </button>
            </div>
            <div className="cards">
            <h1>salicylic acid</h1>
            <h2>Salicylic acid, a beta-hydroxy acid, deeply exfoliates, unclogs pores, reduces sebum, and eliminates dead cells, effectively treating and preventing acne. Its penetration dissolves pore-clogging debris, while its anti-inflammatory properties reduce redness and swelling, promoting a clearer, smoother, and more even-toned complexion.</h2>
            <button>READ MORE -{'>'} </button>
            </div>
            <div className="cards">
            <h1>benzoyl peroxide</h1>
            <h2>Benzoyl peroxide targets acne bacteria, reducing inflammation and preventing new breakouts by introducing oxygen into pores. It exfoliates the skin, clearing away dead cells for a clearer, healthier complexion.</h2>
            <button>READ MORE -{'>'} </button>
            </div>
        </div>

        <div className="rec-container">
            <h1>We Recommend these products <p>from amazon.com</p></h1>
            <div className="rec-ingred">
            <h2>popular</h2>
            <h2>niacinamide</h2>
            <h2>azelaic acid</h2>
            <h2>salicylic acid</h2>
            
            <h2>benzoyl peroxide</h2>
            
            </div>
            <div className="amazon">
            <div className="recs">
            <h1>prod1<h2>blah</h2>  </h1>
            </div>
            <div className="recs">
                <img src="/../img/home/green.png"></img>
            <h1>prod2<h2>blah</h2>  </h1>
          
            </div>
            <div className="recs">
            <h1>prod3<h2>blah</h2></h1>
            
            </div>
            </div>
        </div>
        </div>
    )
  }