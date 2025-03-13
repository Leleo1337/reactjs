import{u as b,r as g,j as e,L as p,H as w,M as v,C as y,c as N,B as E,R as S,a as d}from"./vendor-CDPWUqrT.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const k=()=>{const{pathname:t}=b();g.useEffect(()=>{window.scrollTo(0,0)},[t])},B="https://avatars.githubusercontent.com/u/168025120?v=4";function m(){return e.jsx("header",{className:"fixed top-0 w-full z-1",children:e.jsxs("nav",{className:"flex items-center justify-around gap-6 px-2 py-4 overflow-hidden bg-zinc-900 drop-shadow-md z-1",children:[e.jsx("a",{href:"https://github.com/leleo1337",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:B,alt:"Minha foto do github",className:"w-10 rounded-full"})}),e.jsxs("ul",{className:"flex gap-4 text-md",children:[e.jsx("li",{className:"text-gray-400 underline hover:text-white",children:e.jsx(p,{to:"/",children:"Home"})}),e.jsx("li",{className:"text-gray-400 underline hover:text-white",children:e.jsx(p,{to:"/",children:"About"})}),e.jsx("li",{className:"text-gray-400 underline hover:text-white",children:e.jsx(p,{to:"/",children:"Contact"})})]})]})})}function h(){return e.jsx("footer",{className:"fixed bottom-0 w-full p-2 text-center text-white bg-black z-2",children:e.jsxs("small",{children:["© 2025 ",e.jsx("a",{href:"https://github.com/leleo1337",target:"_blank",className:"underline text-blue-300 text-base px-0.5 hover:text-blue-500",children:"Leo"})," development. All rights reserved."]})})}function z(t){return e.jsxs("div",{className:"items-center w-full h-70 md:h-75 bg-gradient-to-br from-white/60 via-gray-700/40 to-black/20 rounded-md shadow mb-4",children:[e.jsxs("div",{className:"w-full h-35 md:h-43 md:hover:h-48 overflow-hidden rounded-t-sm bg-left-top transition-all ease-in duration-200",children:[e.jsx(p,{to:t.data.path,className:"bg-black overflow-hidden opacity-85 hover:blur-sm",children:e.jsx("div",{className:"w-full h-full transition ease-in duration-200 hover:scale-105",style:{backgroundImage:`url(${t.data.img})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}})}),e.jsx("h1",{className:"relative bottom-7 px-3 bg-black/80 z-0 bg-gradient-to-br text-lg text-gray-300 font-semibold",children:t.data.name})]}),e.jsxs("div",{className:"h-32 p-1",children:[e.jsx("h1",{className:"mt-2 text-center text-white font-semibold text-xl",children:t.data.title}),e.jsx("p",{className:"text-white break-words text-sm pt-4 ml-4 font-inter",children:t.data.summary})]})]})}const M="/reactjs/assets/1challengeOne-CmIwBUkY.png",T="/reactjs/assets/2challengeTwo-BuqY3K1P.png",P="/reactjs/assets/3challengeThree-Bndxx3m4.png",L="/reactjs/assets/4challengeFour-DHcynSkb.png",R="/reactjs/assets/5challengeFive-C9xwrnt2.png",F="data:image/png;base64,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jd+1mFu3262DBw9WpzNVrXaruc0IDPqD6vUu14ULF2pjY6O5fVWct/G7FueNydCZu+ngyeYin23f+/4P6ic/+3ktLi5Wt9ttbjMi3W63FhcX69Gvfb3W19frjddfbz6yJ3O7Pj7t3GZnZ2vu0KFqdzrVaonHcWm1WtXudOqGmZka9Ae1tbXVfGRPztv18WnPG5PDJ5D7zLH7769Tz/22ucyYDQaDevKJx2t5+ZXm1q6+eOxYnf7N75rLjNlgMKgTTzxWK8vLza1dTU9P1/zCQnOZ6+Dc2lptbm42l3flvE2G9LwxWQTkPvPs6efq+PGlqqp6fX2zXjh3sd7f6jUfYwSOHujUI/Mzdd/sdFVV/fHll+pbT55oPrar4bn919ubtfzSxfrgrLmNw+GbO7X00EzddXc+t/n5hZrufvTneluD2toY1KDffIpRaLWrDnRb1Tnw0ae+mxsbde7cueZjuxo+b1v/faY2V96r/gd/bz7GCLQP31jTx2+vA/9yS1V43pgsfolmn7n33nu3r8XjeL2/1asXzl3cvr/rC3fv2N/LPfdcmdvyy+JxnD4426vll/+xuU0dmNq+viwex2rQr9rauPL5x9TUlVl8kuHzJh7Hq//B32tz5b3t++S8MVkE5D4zN3do+1o8jt/wOz9y5MiOvb0cOnRlbh+cMbdxG37nydza7Ss/QvviceyGg73d6Qxv7Wn4vInH8Rt+58l5Y7IISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICcp85e/bs9vXRA50de4ze8Ds/c+bMjr29DM/t8C3mNm7D7zyZW7/f375u+Wk6dsPvfHgWn2T4vLUP37hjj9EbfufJeWOy+JG3z/zp7be2rx+Zn6lFETk2Rw906pH5me37t996c8f+XobntvTgTM0fNrdxOXxzp5Ye/Mfmdnlra/v6QLclIseo1f7onf+/4Vl8kuHzNn389moPnVtGq334xpo+fvv2fXLemCyt244uDpqLfHYtLX2pfn3qdHOZMRsMBnXi8cdqZWW5ubWr40tL9eyp55rLjNlgMKhvPv6NenVlpbm1q+np6ZpfWGgucx2cW1urzc3N5vKunLfJkJ43Jktn7qaDJ5uLfHatrr5X6xcu1JcfeKC5xRg9c/Lpev753zeXP9bq6qq5TYBnTj5dLwRz6/V6Nej3q9vtNrcYow/Pn69Lly41lz+W8zYZ0vPGZPEJ5D5155131re/89164MGH6tZbb21uMwJ/WV2t5eVX6le//EW98847ze2rYm7jdy3m1ul0anZ2trrdbrU7vn4wDr1erzY3Nmp9fb16vV5z+6o4b+N3Lc4bk0FAAgAQ8ZVvAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAiIAEACAiIAEAiAhIAAAiAhIAgIiABAAgIiABAIgISAAAIgISAICIgAQAICIgAQCICEgAACICEgCAyP8BtrlT0/aZ/5kAAAAASUVORK5CYII=",Q="/reactjs/assets/7challengeSeven-BIqBeaiy.png",D=[{id:"1",title:"Static page",name:"Challenge 1 /ReactFacts",img:M,path:"c1",summary:"I learned the basics of JSX syntax."},{id:"2",title:"Data driven React",name:"Challenge 2 / ReactFacts",img:T,path:"c2",summary:"I learned how to create components and use data with them."},{id:"3",title:"Props pratice",name:"Challenge 3 / Jokes",img:P,path:"c3",summary:"Practice with passing data via props."},{id:"4",title:"Map Entry components",name:"Challenge 4 / Travel Journal",img:L,path:"c4",summary:"I learned how to use the map() method to render components dynamically."},{id:"5",title:"React State",name:"Challenge 5 / chef claude",img:R,path:"c5",summary:"I learned Event listeners, State, conditional rendering, Forms and State management strategies"},{id:"6",title:"React State",name:"Challenge 6 / pads",img:F,path:"c6",summary:"I learned about state hierarchy, local state, and shared state."},{id:"7",title:"Side Effects",name:"Challenge 7 / Meme generator",img:Q,path:"c7",summary:"Doing it rn"}],G="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--s'%20width='31.88'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20257'%3e%3cdefs%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb466'%20x1='-.828%25'%20x2='57.636%25'%20y1='7.652%25'%20y2='78.411%25'%3e%3cstop%20offset='0%25'%20stop-color='%2341D1FF'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23BD34FE'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb467'%20x1='43.376%25'%20x2='50.316%25'%20y1='2.242%25'%20y2='89.03%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFEA83'%3e%3c/stop%3e%3cstop%20offset='8.333%25'%20stop-color='%23FFDD35'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23FFA800'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb466)'%20d='M255.153%2037.938L134.897%20252.976c-2.483%204.44-8.862%204.466-11.382.048L.875%2037.958c-2.746-4.814%201.371-10.646%206.827-9.67l120.385%2021.517a6.537%206.537%200%200%200%202.322-.004l117.867-21.483c5.438-.991%209.574%204.796%206.877%209.62Z'%3e%3c/path%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb467)'%20d='M185.432.063L96.44%2017.501a3.268%203.268%200%200%200-2.634%203.014l-5.474%2092.456a3.268%203.268%200%200%200%203.997%203.378l24.777-5.718c2.318-.535%204.413%201.507%203.936%203.838l-7.361%2036.047c-.495%202.426%201.782%204.5%204.151%203.78l15.304-4.649c2.372-.72%204.652%201.36%204.15%203.788l-11.698%2056.621c-.732%203.542%203.979%205.473%205.943%202.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505%204.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'%3e%3c/path%3e%3c/svg%3e",C="/reactjs/assets/reactLogo-CBjhoM09.png",O="/reactjs/assets/tailwindLogo-DHzBqy0n.png",X="/reactjs/assets/bgImage--3-5L-8w.webp",f="/reactjs/assets/bgMoba-fVKYuHQq.webp";function H(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute t-0 w-full h-[78vh] -z-3 hidden sm:block",children:e.jsx("img",{src:X,className:"w-full h-full opacity-5"})}),e.jsx("div",{className:"absolute t-0 w-full h-[78vh] block sm:hidden",children:e.jsx("img",{src:f,className:"w-full h-full opacity-5 -z-1"})}),e.jsx("div",{className:"absolute w-full h-[78vh] block sm:hidden",children:e.jsx("img",{src:f,className:"rotate-y-180 w-full h-full opacity-5 -z-1"})})]})}function W(){document.body.classList.remove("bg-gray-100"),document.body.classList.add("bg-zinc-950");const t=D.map(a=>e.jsx(z,{data:a},a.id));return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("main",{children:[e.jsxs("section",{className:"flex flex-col items-center justify-center flex-nowrap shrink h-[78vh] px-4 pt-8 pb-8 bg-black opacity-99",children:[e.jsx(H,{}),e.jsxs("div",{className:"z-50",children:[e.jsx("img",{src:"https://avatars.githubusercontent.com/u/168025120?v=4",alt:"Leleo1337 github image",className:"mx-auto rounded-full w-40 mb-8"}),e.jsxs("div",{className:"flex items-center justify-center gap-3",children:[e.jsx("img",{className:"w-10",src:G,alt:"TailWindCSS Logo"}),e.jsx("img",{className:"w-12",src:C,alt:"React Logo"}),e.jsx("img",{className:"w-12",src:O,alt:"TailWindCSS Logo"})]}),e.jsx("h1",{className:"pb-4 pt-3 text-5xl font-semibold text-white text-center",children:"About this project"}),e.jsxs("p",{className:"text-white text-center",children:["I'm building this website to learn react and enhance my skills in Tailwind CSS, HTML and JavaScript, following the ",e.jsxs("span",{className:"text-blue-300 hover:text-blue-500 underline",children:[e.jsx("a",{href:"https://scrimba.com/learn-react-c0e",target:"_blank",children:'"Learn React" course on Scrimba'})," "]}),", this website is made to apply what I've learned in the lessons."]})]})]}),e.jsxs("section",{className:"relative w-full px-2 pt-4 pb-20 m-auto bg-zinc-950",children:[e.jsx("h1",{className:"py-8 text-3xl font-bold text-center text-white",children:"Course Exercises / Challenges"}),e.jsx("div",{className:"pb-8 border-b border-gray-900",children:e.jsx("div",{className:"flex flex-col gap-4 px-4 sm:grid sm:grid-rows-1 sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3 lg:justify-items-center",children:t})})]})]}),e.jsx(h,{})]})}const J="/reactjs/assets/reactC1Bg-ab3yuD_l.svg";function q(){return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("div",{className:"absolute top-[50%] left-[50%] translate-[-50%] w-[95%] sm:w-[500px] rounded-md overflow-hidden shadow-xl",children:[e.jsxs("header",{className:"flex w-full bg-c1Header h-[90px] rounded-t-md",children:[" ",e.jsxs("div",{className:"flex items-center justify-start gap-2 ml-6 text-cyan-300",children:[e.jsx("img",{src:C,alt:"REACT ",className:"w-8 "}),e.jsx("span",{className:"text-xl font-semibold font-inter",children:"ReactFacts"})]})]}),e.jsxs("main",{className:"gap-6 p-6 pb-16 bg-MainBg",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mt-8 text-4xl font-bold text-white font-inter",children:"Fun facts about React"}),e.jsxs("ul",{className:"pl-12 sm:pl-12 text-gray-200 list-disc mt-9 marker:text-cyan-400 marker:text-2xl marker:relative marker:top-32 text-md",children:[e.jsx("li",{children:"Was first released in 2013"}),e.jsx("li",{children:"Was originally created by Jordan Walke"}),e.jsx("li",{children:"Has well over 100k stars on GitHub"}),e.jsx("li",{children:"Is mainted by Meta"}),e.jsx("li",{className:"w-64",children:"Powers thousands of interprise apps, including mobile apps"})]})]}),e.jsx("div",{className:"w-18",children:e.jsx("img",{src:J,alt:"React  at the background",className:"absolute bottom-18 left-97 w-[260px]"})})]})]}),e.jsx(h,{})]})}const V="/reactjs/assets/mr-whiskerson-DpLqLNvH.png",Z="/reactjs/assets/fluffykins-D-Zo6eA_.png",U="/reactjs/assets/felix-BX7YXqhZ.png",Y="/reactjs/assets/pumpkin-CgChg8in.png";function x(t){const{name:a,email:i}=t;return console.log(a,i),console.log(t),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"p-4 pb-8 bg-white rounded-md shadow-xl w-72",children:[e.jsx("img",{src:t.img,alt:"MR WHISKERSON PHOTO",className:"w-full h-42 rounded-xl"}),e.jsx("h3",{className:"py-4 text-xl font-bold"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4",children:e.jsx("svg",{"data-slot":"icon",fill:"none","stroke-width":"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"})})}),e.jsx("p",{className:"font-semibold text-gray-700",children:t.name})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4",children:e.jsx("svg",{"data-slot":"icon",fill:"none","stroke-width":"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})})}),e.jsx("p",{className:"font-semibold text-gray-700",children:t.email})]})]})})}function K(){return document.body.classList.remove("bg-zinc-950"),document.body.classList.add("bg-gray-100"),e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("div",{className:"flex flex-wrap gap-6 max-w-[600px] justify-center mx-auto pt-8 pb-16",children:[e.jsx(x,{img:V,name:"Mr. Whiskerson",phone:"(212) 555-1234",email:"mr.whiskaz@catnap.meow"}),e.jsx(x,{img:Z,name:"Fluffykins",phone:"(212) 555-2345",email:"fluff@me.com"}),e.jsx(x,{img:U,name:"Felix",phone:" (212) 555-4567",email:"thecat@hotmail.com"}),e.jsx(x,{img:Y,name:"Pumpkin",phone:"(0800) CAT KING",email:"pumpkin@scrimba.com"})]}),e.jsx(h,{})]})}function u(t){const[a,i]=g.useState(!1);function l(){i(n=>!n)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"pb-4 text-lg",children:[t.setup&&e.jsx("p",{className:"font-semibold",children:t.setup}),a&&e.jsx("p",{className:"ml-4",children:t.punchline}),e.jsx("button",{onClick:l,className:"my-2 bg-gray-400 rounded-sm cursor-pointer px-2 hover:bg-gray-500 text-white",children:"show punchline"}),e.jsx("hr",{})]})})}function _(){return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx("main",{children:e.jsxs("div",{className:"absolute top-1/2 left-1/2 w-[95%] sm:w-[500px] sm:h-[600px] -translate-y-1/2 -translate-x-1/2 bg-gray-50 p-4 mt-20 sm:mt-0 pb-20 rounded-xl shadow-md",children:[e.jsx(u,{setup:"What's the best thing about Switzerland?",punchline:"I don't know, but the flag is a big plus!",upvotes:8,downvotes:3,comments:["good one","kkkkk","hahahaha"],isPun:!0}),e.jsx(u,{setup:"I got my daughter a fridge for her birthday.",punchline:"I can't wait to see her face light up when she opens it.",upvotes:13,downvotes:6,comments:["good one","kkkkk","hahahaha"],isPun:!0}),e.jsx(u,{setup:"How did the hacker escape the police?",punchline:"He just ransomware!",upvotes:4,downvotes:6,comments:["good one","kkkkk","hahahaha"],isPun:!0}),e.jsx(u,{setup:"Why don't pirates travel on mountain roads?",punchline:"Scurvy.",upvotes:2,downvotes:12,comments:["good one","kkkkk","hahahaha"],isPun:!1}),e.jsx(u,{setup:"Why do bees stay in the hive in the winter?",punchline:"Swarm.",upvotes:8,downvotes:8,comments:["good one","kkkkk","hahahaha"],isPun:!0})]})}),e.jsx(h,{})]})}const $="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAX1SURBVHgB3ZyNeds2EIZPnsCdoOgEcSYoM0HdCaxMEHkCMRPYnUDJBHUnADuB7QlATyBv8BVnQDFNU/jjQVL6Pg8sSwR4IHg4HA4gF3RAAJzbD2VTY9Ov/v8Lf1iNsvc2Pfv0YNMTfy4Wi47+T3Cj2LSySdu0xXy2/lxLmxT9jIwapTaaG4t+BnzDrCGjKbkYm77gFLXqyA0zxuCUNMpWpvGVOjWMTQ0dCzitucHpc0MzWFABcP1c0/uhOYcHnx7JDeX96Ljy6YNNlzSP3qZP1kXoqTZwXarE1nCZW1/+PEPeGjIY1O5yVsAV8tFwQ35yowzkrSHPFdWgoLIGM+5YgbwcrV6TJMjTHK5oSzNAfuNom5RN3zLKyGgSnM1I5R4zHDV/kRr53A7OwVMQk1iuoTn4CqcKYwOcbWcGctYodzT1xPnuE8qxPEWlIL1xWioAsr6Umjh/SpczKLmxGRVvqQC4xkm5yymYgJw2oXyeM4l0u9NSIbbsBnKsIrJSNKmhVJDWtVoqBM5GSNIkyNSRcxhMdLWziRMtKT6FuLNue0vlXNDh+ZPeT2eGKJuCmpg6avFxRTOAsz+SJM3VEDcdPKq90aKxBrEgFRZDX+dO+mx5npz+RXL8npLJx7NDcrlx3mjRm9k83GigAif4ZoV8JgH8nTK+UhJwZKAnFxl48r/x9254QxPkcvnf/E18U+FlgiorEgRpQ/BclhNyV5Eyq6nK6kihDQkD+dFsiEYg9Iqw165LKqoSLpiNIGvFBs4JNL7s1v+mJspIw/Kj3RZx7T0fZo51r7uIsAuk+U7jOZPkaGaQYQK87JAWrYaZdUT4ZUCQQt4ksxmUvYQcijJB+Lr1MGPoArcRIbnzqZvBHTSQocg+ItxznE+EuPN0FxBQamQ1ZNfQVoUNFOviF+woxtz+h8CxKWPY2XRNYbe+ITn/h3mmAryv0weyNNxAisJcYc+oYAXsnLMd7Ejy8gpH+D5RWPip8G/gmOIG+kBhlE2hIDc3xHdymvZ196P3XvlY0d3NZI42hnqIyjGyDRUAF4qtTbETi7ChNqxBqa2/QdlUo6f6NFROHzqYYoN2cD6N/J0TksZ4Hwp1Vk3VWW4BcpqkvWoe4uJTKdXwMJiPhgvwqz3nz1k6motB5tY8RPzABf8hOTpyAbVuT2VY49jvWtpUZ438ld3mT2an6Z/GcR64rqn3ngV17u4mdheRv1QswWqiHtFRrAZLm9h9WO7LwH6STUubOKr5kZzPFPPA59JM/KYC+Z+5Bf9GXbJ2UkB2QXGMmZAXun7NGvREdWlzGsnbiFrTFDXxW2gu+nhGJ+jIDRqJpzDVpipwdlIFsvTcQB3VJ3uJZ2CjfrFfeSWlo/n0o+9NJP9DSuhRvN+Xgvk+1XJ0Ph3KzHnOvDo/UD06EsJHCHjEK63vj3Jw3asJ5O34z26Y/4fq8Z0E8TeU19lzbdOzj1/t+BLJ/1LvXQPdUT3EtdNrUq5dG9fjMpK/4z9nA4EdyfP8bglXjuKGh3M7VCDLj+XqoSddo5vVjCbmnrvnP972LCN535sF1BnNxEawifpukMd9YjkTElpjM4F4zAjzlptitCHBNbSoJWEgu79xiEEslgR5LeIGj6295TROqfak0KZUQHJJeMga87fupW4QLyHdXiLv8YOsSiBxP+FEnTiwVXNK1OTUp+Z61jazHnyzDOpyS7mgXlfTGXWoaW92GARG2r0h10FMRtrZe8zIK77tb8TLNYa8/WBM2rvbIrtaB/QpmRCfbUvwObalORq0tyfgiew1yRHVSLw+NFyTa39tMkDOP1oGZPBexw3q01INEN9fnIKeOC+PVBqHYZVzzdnPzcP5MWw858yxenqN5/xB9W0N8xJoy329zjFfLHBIeip8sUDRyuogNiz5QEotuI4fD/LWhSmQ95TxITE45stNxsCNcgbH5+W5fZzW3iUH3NTgWA11ug0zBVzX06iPRuG7QU4COK2SfJ/Z9pCNUjTMzwHOcHKEUZHbo33ukxpl7f0nL+88+e8df1ZcSnrHf3FOzkwium/kAAAAAElFTkSuQmCC",ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAdCAYAAABFRCf7AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI3SURBVHgBrVVdTttAEJ7Z1EGhjWRu4N4gPUHJCULeUMiDOUHTE6S5QTlBjQSGt5QTNJwA36C+Qa3SKsLGu50JMQ3OrDEJn2StPJn55iffjhEsmA+H+8aYHj37BtFDY1w6EwUQ0c8ROs5JKwhiKRbXyHzfM1n2jcngOSAGynEmZXIsV5cbM+WqoD5iA9B/F4bRGukf3+9gmt7AZkiIuFsQq0WF1DIRTmFzuFTd9Jfvu4+kOsvGdHgVQTH9STN+Kny8nQceQK5Sp+lPyYuyx7lSx+2zs1lhmx8eevdKjaiaT1JM2mzuvcmz7AAthKh1tx2G8aq9dXnJ76PbwYDlNS7H7dzd+dx+T8qIVOGSQAQl+yKOQ6meooo6UpWtlZYrcFU2kL49BZImEWOoAao0EsyeEp1JIlCH1OLHpPG6t/EKzVWhQbtBMMfKyK26heZsYClScr9sR+JTNNhrKYjso/lgMLYRkrZ/WOKu8ZaWiNJadFimjmh2pw06dZ67JLWPGsC3LR0H4MNC93+Pjm4oRQe2BEtxNwzfP9x9Y67gFUAdTPhckN43m1+pzQS2AFdJqy94JN0LgsRoPYEtUFS5TPAfm862mGXx/uRGacTPsAF4m62+PyHlvUltnMDLMClvM2mV1h4D3Z7Z7vl5t2wXF4rK8/5zalgs8Tw/FuMlI7dD8+2DvcSE52hb4soWx/Ol6ylWAlpXfhWspAwW86r+GJzo7cXF96o4hBr4PRweNLTuaaVO2zU+M/8AqtkDKnj1tYcAAAAASUVORK5CYII=";function te(t){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"border-b border-gray-200 ",children:e.jsxs("div",{className:"flex flex-col md:gap-4 pt-4 md:flex-row",children:[e.jsx("div",{title:t.contentData.img.alt,style:{backgroundImage:`url(${t.contentData.img.src})`},className:"w-full h-46 sm:h-60 md:h-40 mb-4 bg-center bg-cover md:w-36 rounded-md shrink-0 shadow-sm"}),e.jsxs("div",{className:"flex flex-col pt-1",children:[e.jsxs("div",{className:"flex items-center justify-between md:justify-start md:gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:ee,alt:"Marker",className:"w-2 h-3"}),e.jsx("p",{className:"text-xs font-light tracking-widest text-gray-900 font-inter",children:t.contentData.country})]}),e.jsx("a",{href:t.contentData.googleMapsLink,target:"_blank",className:"text-[10px] text-gray-400 underline",children:"View on Google Maps"})]}),e.jsx("h1",{className:"pt-2 text-xl font-bold",children:t.contentData.title}),e.jsx("p",{className:"text-xs font-semibold tracking-tighter text-gray-500",children:t.contentData.date}),e.jsx("p",{className:"pt-2 pb-4 tracking-tighter text-gray-600 font-inter",children:t.contentData.text})]})]})})})}const se=[{id:1,img:{src:"https://scrimba.com/links/travel-journal-japan-image-url",alt:"Mount Fuji"},title:"Mount Fuji",country:"Japan",googleMapsLink:"https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9",dates:"12 Jan, 2021 - 24 Jan, 2021",text:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."},{id:2,img:{src:"https://scrimba.com/links/travel-journal-australia-image-url",alt:"Sydney Opera House"},title:"Sydney Opera House",country:"Australia",googleMapsLink:"https://maps.app.goo.gl/Zr17SCrsJeCEKMd36",dates:"27 May, 2021 - 8 Jun, 2021",text:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."},{id:3,img:{src:"https://scrimba.com/links/travel-journal-norway-image-url",alt:"Geirangerfjord"},title:"Geirangerfjord",country:"Norway",googleMapsLink:"https://maps.app.goo.gl/fhkJuBhmFDv47tiB7",dates:"01 Oct, 2021 - 18 Nov, 2021",text:"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."},{id:4,img:{src:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Grand_Canyon_Hopi_Point_with_rainbow_2013.jpg",alt:"Grand Canyon"},title:"Grand Canyon",country:"USA",googleMapsLink:"https://maps.app.goo.gl/xyz123",dates:"15 Mar, 2022 - 22 Mar, 2022",text:"The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona. It is known for its visually overwhelming size and its intricate and colorful landscape."},{id:5,img:{src:"https://i.etsystatic.com/8026687/r/il/e16641/1436085510/il_570xN.1436085510_8o7t.jpg",alt:"Eiffel Tower"},title:"Eiffel Tower",country:"France",googleMapsLink:"https://maps.app.goo.gl/abc456",dates:"10 Apr, 2022 - 17 Apr, 2022",text:"The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."},{id:6,img:{src:"https://upload.wikimedia.org/wikipedia/commons/3/38/Sunset_across_Machu_Picchu.jpg",alt:"Machu Picchu"},title:"Machu Picchu",country:"Peru",googleMapsLink:"https://maps.app.goo.gl/def789",dates:"05 Jul, 2022 - 12 Jul, 2022",text:"Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a mountain ridge 2,430 meters (7,970 ft) above sea level."},{id:7,img:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYCx1MN6Eaf8krTHWIfqqffBjbD7kZPaUGw&s/",alt:"Taj Mahal"},title:"Taj Mahal",country:"India",googleMapsLink:"https://maps.app.goo.gl/ghi012",dates:"20 Sep, 2022 - 27 Sep, 2022",text:"The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."},{id:8,img:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",alt:"Colosseum"},title:"Colosseum",country:"Italy",googleMapsLink:"https://maps.app.goo.gl/jkl345",dates:"01 Nov, 2022 - 08 Nov, 2022",text:"The Colosseum is an oval amphitheater in the center of the city of Rome, Italy. It is the largest ancient amphitheater ever built and is considered one of the greatest works of architecture and engineering."}];function ae(){document.body.classList.remove("bg-zinc-950"),document.body.classList.add("bg-gray-100");const t=se.map(a=>e.jsx(te,{contentData:a},a.id));return e.jsxs(e.Fragment,{children:[e.jsx(m,{})," ",e.jsxs("div",{className:"px-2 mt-8 sm:px-6 md:px-10",children:[e.jsxs("header",{className:"py-3 mx-auto bg-red-400 md:container md:max-w-[900px] rounded-t-md shadow-xl",children:[" ",e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("img",{src:$,alt:"Globe Icon",className:"w-8"}),e.jsx("h2",{className:"font-semibold text-white",children:"My travel journal"})]})]}),e.jsx("main",{className:"px-6 py-4 mx-auto mb-20 bg-white md:container md:max-w-[900px] rounded-b-md shadow-xl",children:e.jsx("div",{children:t})})]}),e.jsx(h,{})]})}const ne=new w("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"),ie=`
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page
`;async function re(t){const a=t.join(", ");try{return(await ne.chatCompletion({model:"mistralai/Mixtral-8x7B-Instruct-v0.1",messages:[{role:"system",content:ie},{role:"user",content:`I have ${a}. Please give me a recipe you'd recommend I make!`}],max_tokens:1024})).choices[0].message.content}catch(i){console.error(i.message)}}const le="/reactjs/assets/chef-claude-icon-fYGIBDdT.png";function oe(){return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:le,alt:"Chef Claude icon",className:"w-8"}),e.jsx("h1",{className:"font-normal text-2xl",children:"Chef Claude"})]})}function Ae(t){return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"get-recipe-container py-4 px-2 shadow-sm",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Cheff Claude Recommends: "}),e.jsx(v,{children:t.recipeIdea}),e.jsx("p",{className:"enjoy-text ",children:"Enjoy!"})]})})}function ce(t){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-10 p-4 bg-c5recipeSectionBg rounded-md sm:flex sm:justify-center sm:items-center lg:justify-center gap-16 lg:w-140",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold text-md",children:"Ready for a recipe ?"}),e.jsx("p",{className:"pt-0.5 text-sm text-gray-600",children:"generate a recipe from your list of ingredients"})]}),e.jsx("button",{onClick:t.getRecipe,className:"w-34 h-10  mt-4 py-2 bg-c5Button hover:bg-c5Button/90 active:bg-c5Button/100 text-white text-sm rounded shadow cursor-pointer",children:t.spin?e.jsx(y,{size:24,color:"white"}):"Get a recipe"})]})})}function de(t){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"pt-8",children:[e.jsx("h1",{className:"pb-4 font-semibold text-xl sm:text-2xl",children:"Ingredients on hand:"}),e.jsx("ul",{className:"flex flex-col gap-2 list-disc pl-6 text-gray-500",children:t.listItems}),t.listItems.length>3&&e.jsx(ce,{spin:t.spin,getRecipe:t.getRecipe})]})})}function ge(){document.body.classList.remove("bg-zinc-950"),document.body.classList.add("bg-c5Background");const[t,a]=g.useState([]),[i,l]=g.useState(""),[n,s]=g.useState(!1),r=t.map(c=>e.jsx("li",{children:c},c));function o(c){const A=c.get("ingredient");if(A==""||!isNaN(A)){alert("[ERRO] Insira ingredientes validos");return}if(t.includes(A)){alert("[ERRO] ingrediente já adicionado");return}a(j=>[...j,A])}async function I(c){s(!0);const A=await re(c);A&&(l(A),s(!1))}return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("div",{className:"container md:w-[1024px] mx-auto mt-8 mb-40 bg-white font-inter rounded-md",children:[e.jsx("header",{className:"flex items-center justify-center gap-4 h-20 shadow-sm relative",children:e.jsx(oe,{})}),e.jsxs("main",{className:"bg-c5Main px-2 shadow-md rounded-b-md sm:px-12 pb-12",children:[e.jsxs("section",{className:"px-2 py-8",children:[e.jsxs("form",{action:o,className:"flex flex-col gap-2.5 justify-center items-center sm:flex-row",children:[e.jsx("input",{type:"text",placeholder:"e.g oregano","aria-label":"add ingredient",name:"ingredient",className:"border w-full py-1 sm:py-2 border-gray-300 rounded-sm text-sm text-center shadow-xs"}),e.jsx("button",{className:"bg-c5IngButton w-2/3 sm:w-1/2 py-1 sm:py-2 text-white rounded-md text-sm cursor-pointer hover:bg-c5IngButton/90 active:bg-c5IngButton/100",children:"+ Add ingredient"})]}),t.length==0&&e.jsx("p",{className:"py-4 text-sm text-gray-400 font-semibold",children:"You must add at least 4 ingredients to get a recipe"}),t.length>0&&e.jsx(de,{listItems:r,spin:n,getRecipe:()=>I(t)})]}),i&&e.jsx(Ae,{recipeIdea:i})]})]}),e.jsx(h,{})]})}function me(t){return e.jsx("button",{className:"flex items-center justify-center text-white font-semibold w-[100%] h-36 border-3 border-white cursor-pointer rounded-xl",onClick:()=>t.toggle(t.id),style:{backgroundColor:t.color,opacity:t.isOn?1:.1},children:"Click me"},t.id)}const he=[{id:1,color:"#F18D8B",on:!0},{id:2,color:"#F5C280",on:!1},{id:3,color:"#EEEC79",on:!0},{id:4,color:"#64ED98",on:!0},{id:5,color:"#63DEED",on:!1},{id:6,color:"#877FED",on:!1},{id:7,color:"#A57FE9",on:!1},{id:8,color:"#F289C1",on:!0}];function Ie(){const[t,a]=g.useState(he),i=t.map(s=>e.jsx(me,{id:s.id,color:s.color,isOn:s.on,toggle:l},s.id));function l(s){a(r=>r.map(o=>o.id===s?{...o,on:!o.on}:o))}function n(){a(s=>s.map(r=>({...r,on:!1})))}return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("main",{className:"absolute top-1/2 left-1/2 -translate-1/2 bg-zinc-900 w-full max-w-[450px] rounded-sm",children:[e.jsx("div",{className:"grid grid-cols-2 p-4 gap-4",children:i}),e.jsx("button",{onClick:n,className:"bg-red-600 px-2 py-1 ml-4 mb-2 text-white rounded-sm cursor-pointer active:bg-red-500",children:"Turn all off"})]}),e.jsx(h,{})]})}const ue="/reactjs/assets/trollFace-DrVwpMF7.png",xe="/reactjs/assets/memeImg-DXaqfkFD.png";function pe(){const[t,a]=g.useState({topText:"SHUT UP",bottomText:"AND TAKE MY MONEY",imgURL:xe});function i(s){const{value:r,name:o}=s.target;a(I=>({...I,[o]:r}))}async function l(){const s="https://api.imgflip.com/get_memes";try{const r=await fetch(s);if(r.ok){const o=Math.floor(Math.random()*101),I=await r.json(),c=I.data.memes[o].url;console.log(I),a(A=>({...A,imgURL:c}))}else console.log("api de merda")}catch(r){console.log("deu erro zé ",r)}}function n(s){s.preventDefault()}return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-1/2 w-full max-w-[700px]",children:[e.jsx("header",{className:"bg-purple-900 px-8 py-4 rounded-t-md",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:ue,alt:"Troll face",className:"w-11"}),e.jsx("h1",{className:"text-white text-xl font-semibold",children:"Meme Generator"})]})}),e.jsxs("main",{className:"bg-white p-4 sm:py-6 sm:px-12 py-8 rounded-b-md",children:[e.jsxs("form",{onSubmit:n,children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-16",children:[e.jsxs("div",{className:"flex flex-col sm:w-1/2",children:[e.jsx("label",{htmlFor:"top",className:"text-gray-600 font-semibold pb-1",children:"Top text"}),e.jsx("input",{type:"text",name:"topText",id:"top",className:"border border-gray-300 rounded-sm px-2 py-0.5 sm:py-1",value:t.topText,onChange:i})]}),e.jsxs("div",{className:"flex flex-col sm:w-1/2",children:[e.jsx("label",{htmlFor:"bottom",className:"text-gray-600 font-semibold pb-1",children:"Bottom text"}),e.jsx("input",{type:"text",name:"bottomText",id:"bottom",className:"border border-gray-300 rounded-sm px-2 py-0.5 sm:py-1",value:t.bottomText,onChange:i})]})]}),e.jsx("button",{onClick:l,className:"py-2 px-6 mt-4 w-full bg-purple-800 text-white active:bg-purple-900 rounded-md cursor-pointer",children:"Get a new meme image  🖼"})]}),e.jsx("div",{className:"w-full mt-6 rounded-md shadow-xl bg-black",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:t.imgURL,alt:"Random generated meme image",className:"opacity-95x rounded-sm max-h-[500px] w-full"}),e.jsx("span",{className:"w-full absolute top-0 px-4 py-4 text-center text-white font-meme meme-Text-Shadow text-lg sm:text-3xl",children:t.topText}),e.jsx("span",{className:"w-full absolute bottom-0 px-4 py-3 text-center text-white font-meme meme-Text-Shadow text-lg sm:text-3xl",children:t.bottomText})]})})]})]}),e.jsx(h,{})]})}const fe=N.createRoot(document.querySelector("#root"));fe.render(e.jsx(g.StrictMode,{children:e.jsxs(E,{basename:"/reactjs/",children:[e.jsx(k,{}),e.jsxs(S,{children:[e.jsx(d,{path:"/",element:e.jsx(W,{})}),e.jsx(d,{path:"/c1",element:e.jsx(q,{})}),e.jsx(d,{path:"/c2",element:e.jsx(K,{})}),e.jsx(d,{path:"/c3",element:e.jsx(_,{})}),e.jsx(d,{path:"/c4",element:e.jsx(ae,{})}),e.jsx(d,{path:"/c5",element:e.jsx(ge,{})}),e.jsx(d,{path:"/c6",element:e.jsx(Ie,{})}),e.jsx(d,{path:"/c7",element:e.jsx(pe,{})})]})]})}));
