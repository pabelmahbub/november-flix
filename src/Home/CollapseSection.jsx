import React from 'react';
import './Home.css';
import Email from '../Components/Email'

const novFlixJSON =  [
    {
    "id": 1,
    "toggle": "What is Nov-Flix",
    "expose": "Nov-Flix is a streaming service that offers a wide variety of award winning TV shows, movie, anime, documentaries, and more on thousands fo internet-connected devices.",
    "expose1": "Nov-Flix is a streaming service that offers a wide variety of award winning TV shows, movie, anime, documentaries, and more on thousands fo internet-connected devices.",
    },
    {
    "id": 2,
    "toggle": "How much does Nov-Flix cost?",
    "expose": "Watch Nov-Flix on your smartphone, tablet, SmartTV, laptop, or streaming devices, all for one fixed monthly fee. Plans range from JPY 200 to JPY 1200 a month. No extra cost, no contracts.",
    },
    {
    "id": 3,
    "toggle": "What is different with basic with adds?",
    "expose": "Basic with ads is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites on any device with limited ad breaks. This plan does not allow downloads and a limited number of movies and TV shows are not available due to licensing restrictions. Some location and device restrictions also apply. Learn more.",
    },
    {
    "id": 4,
    "toggle": "What can I watch?",
    "expose": "Watch anywhere, anytime. Sign in with your Nov-Flix account to watch instantly on the web at Nov-Flix.com from your personal computer or on any internet-connected device that offers the Nov-Flix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    "expose1":"You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Nov-Flix with you anywhere."
    },
    {
    "id": 5,
    "toggle": "How do I cancel?",
    "expose": "Nov-Flix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
    "id": 6,
    "toggle": "What can I watch on Nov-Flix",
    "expose": "Nov-Flix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Nov-Flix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
    "id": 7,
    "toggle": "Is Nov-Flix good for kids?",
    "expose": "The Nov-Flix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    "expose1": "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },
  
]
function CollapseSection() {

  return (
    <div className='collapseDiv'>

        <h1 className="collapseText text-5xl pt-24 pb-24 font-bold">Frequently asked questions</h1>
    
          {novFlixJSON.map((content) => (
          <div style={{marginBottom:'8px'}}>
            <div className="collapse collapse-plus border border-base-300 bg-base-100">
              <input type="checkbox" className="peer" /> 

              <div className="textLeft collapse-title bg-accent text-base-100 peer-checked:bg-accent text-base-100 pr-72">
                {content.toggle}
              </div>
              
              <div className="textLeft collapse-content bg-accent text-base-100 peer-checked:bg-accent text-base-100"> 
                  <p>{content.expose}</p>
                  {content?.expose1 && <p className="pt-6">{content.expose1}</p>}
              </div>
              </div>
          </div>
          ))}

         <p className="textStyle text-xl py-16">Ready to watch? Enter your email to create or restart your membership.</p>
         <Email/>

    </div>
  )
}

export default CollapseSection