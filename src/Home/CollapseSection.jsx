import React from 'react'
import Email from '../Components/Email'

const sampleJSON =  [
    {
    "id": 1,
    "toggle": "What is November-Flix",
    "expose": "November-Flix is a streaming service that offers a wide variety of award winning TV shows, movie, anime, documentaries, and more on thousands fo internet-connected devices.",
    "expose1": "November-Flix is a streaming service that offers a wide variety of award winning TV shows, movie, anime, documentaries, and more on thousands fo internet-connected devices.",
    },
    {
    "id": 2,
    "toggle": "How much does November-Flix cost?",
    "expose": "Watch November-Flix on your smartphone, tablet, SmartTV, laptop, or streaming devices, all for one fixed monthly fee. Plans range from JPY 200 to JPY 1200 a month. No extra cost, no contracts.",
    },
    {
    "id": 3,
    "toggle": "What is different with basic with adds?",
    "expose": "Basic with ads is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites on any device with limited ad breaks. This plan does not allow downloads and a limited number of movies and TV shows are not available due to licensing restrictions. Some location and device restrictions also apply. Learn more.",
    },
    {
    "id": 4,
    "toggle": "What can I watch?",
    "expose": "Watch anywhere, anytime. Sign in with your November-Flix account to watch instantly on the web at November-Flix.com from your personal computer or on any internet-connected device that offers the November-Flix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    "expose1":"You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take November-Flix with you anywhere."
    },
    {
    "id": 5,
    "toggle": "How do I cancel?",
    "expose": "November-Flix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
    "id": 6,
    "toggle": "What can I watch on November-Flix",
    "expose": "November-Flix has an extensive library of feature films, documentaries, TV shows, anime, award-winning November-Flix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
    "id": 7,
    "toggle": "Is November-Flix good for kids?",
    "expose": "The November-Flix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    "expose1": "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },
  
]
function CollapseSection() {

  return (
    <div style={{backgroundColor:'#20262E',paddingBottom: '200px'}}>
    
    <div style={{marginLeft: '20%',marginRight: '20%'}}>

    <h1 style={{textAlign:'center',fontFamily:'raleway', color:'#fff'}} className="text-5xl pt-24 pb-24 font-bold">Frequently asked questions</h1>
    
    {/* 1st collapse */}
    {sampleJSON.map((content) => (
    <div style={{marginBottom:'8px'}}>
       <div className="collapse collapse-plus border border-base-300 bg-base-100">
        <input type="checkbox" className="peer" /> 
        <div  style={{textAlign:'left', color:'#fff'}}className="collapse-title bg-accent text-base-100 peer-checked:bg-accent text-base-100 pr-72">
           {content.toggle}
        </div>
        <div style={{textAlign:'left', color:'#fff'}} className="collapse-content bg-accent text-base-100 peer-checked:bg-accent text-base-100"> 
            <p >{content.expose}</p>
            {content?.expose1 && <p className="pt-6">{content.expose1}</p>}
        </div>
        </div>
    </div>
    ))}

    <div style={{marginLeft: '10%',marginRight: '10%'}}>
        <p style={{color:'#fff',fontFamily:'raleway'}} className="text-xl py-16">Ready to watch? Enter your email to create or restart your<br/> membership.</p>
        <Email/>
    </div>
    


    

   </div>


    </div>
  )
}

export default CollapseSection