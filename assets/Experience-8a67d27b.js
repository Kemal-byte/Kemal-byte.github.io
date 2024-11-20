import{a as n,j as e,m as r}from"./index-a526dbf9.js";import{S as c}from"./SecondHeader-d5925e82.js";const d=i=>{const{index:a}=i,o={initial:{opacity:0,x:100},animate:t=>({opacity:1,x:0,transition:{duration:2,delay:.3*t}})},l={initial:{x:-100,opacity:0},animate:t=>({opacity:1,x:0,transition:{duration:2,delay:.3*t}})};return n("div",{className:"experience__item",children:[n("div",{className:"nodge",children:[e(r.div,{viewport:{once:!0},className:"experience__duration",variants:l,initial:"initial",whileInView:"animate",custom:a,children:e("div",{className:"nodge__duration",children:i.duration})}),e("div",{className:"nodge-img-container",children:e("img",{src:"/work.svg",alt:""})})]}),n(r.div,{viewport:{once:!0},className:"experience__details",variants:o,initial:"initial",whileInView:"animate",custom:a,children:[e("h5",{children:i.title}),n("div",{className:"mb-1",children:[e("h6",{children:i.company}),window.innerWidth<550&&e("p",{className:"text-grey ",style:{marginTop:"0.5rem"},children:i.duration})]}),e("div",{className:"text-grey mb-1",children:i.content.map((t,s)=>e("p",{style:{marginBottom:"0.5rem"},children:t},s))}),e("ul",{className:"experience__languages my-2",children:i.skills.map((t,s)=>e("li",{className:"pills",children:t},s))})]})]})},m=[{duration:"Jun 2024 - Current",title:"Backend Developer",company:"Alarm Dispatcher Systems GmbH",content:["As a Backend Development Work-Study Student, I developed and implemented large-scale automated systems using Python, including an invoice notification system serving thousands of users. I structured and designed codebases for easy maintainability and scalability, ensuring adherence to best practices in software engineering. I also created and executed comprehensive unit tests to verify the reliability and performance of backend systems. By collaborating with cross-functional teams, I helped integrate backend solutions and meet project deadlines, contributing to the development team’s overall efficiency and productivity. This role has provided me with valuable hands-on experience in backend technologies."],skills:["Python","Pytest","RestFull API"]},{duration:"Jun 2024 - Oct 2024",title:"Frontend Developer",company:"Enerithm Technology GmbH ",content:["As a Front-End Developer, I collaborated with a startup company to design and implement a professional landing page aimed at optimizing conversion rates for pioneers in the energy sector. Utilizing tools such as Figma and Framer, I crafted visually appealing and user-friendly interfaces that align with the company's branding and strategic goals. My work involved close coordination with the startup's team to ensure that the website effectively communicates the company’s vision and engages visitors, ultimately contributing to a high turnover rate and a robust online presence."],skills:["Figma","Framer","UI/UX"]},{duration:"Mar 2023 - May 2024",title:"Fullstack Developer",company:"Polychip",content:["At Polychip.ai, I held the role of Fullstack Developer, responsible for crafting UI/UX prototypes aligned with customer requirements. Leveraging my expertise in React and JavaScript, I adeptly transformed design concepts into fully functional features. In addition to frontend development, I created dynamic PDF generation algorithms using python, optimizing form usability and flexibility to better serve users.","During my tenure at Polychip.ai as a Fullstack Developer, I was not only tasked with crafting UI/UX prototypes but also with developing backend logic by creating API routes. With my proficiency in React and JavaScript, I seamlessly translated design concepts into interactive elements while ensuring alignment with customer needs. Furthermore, I utilized Python to develop dynamic PDF generation algorithms, enhancing form usability and flexibility for our users. These backend solutions complemented the frontend features, resulting in a comprehensive and user-friendly platform."],bullet_points:["Proficient in crafting UI/UX prototypes tailored to meet diverse customer requirements","killed in translating design concepts into interactive frontend features using React and JavaScript","Proficient in developing backend logic and creating API routes to support frontend functionalities"],skills:["React","JavaScript","HTML","CSS","Flask","Python","MongoDB"]},{duration:"Feb 2023 - Mar 2023",title:"Backend Developer",company:"ChargeHorizons",content:["During my time at ChargeHorizon, I took on the role of developing scalable backend solutions for hotel reservation systems. My responsibilities included leveraging the capabilities of Firebase to enable seamless user creation and booking processes. Through strategic implementation and optimization, I contributed to enhancing the efficiency and functionality of our reservation platform."],skills:["React","JavaScript","Firebase"]}],h=()=>{const i={initial:{pathLength:0},animate:{pathLength:1,transition:{duration:1.5,delay:.5,ease:"easeInOut"}}};return e("section",{id:"work-section",children:e("div",{className:"experience section__padding",children:n("div",{className:"container",children:[e(c,{class:"my-3",children:"Experience"}),e("div",{className:"experience__container",children:n("div",{className:"experience__content pt-2",children:[e("div",{className:"line"}),e(r.svg,{className:"line",children:e(r.line,{viewport:{once:!0},variants:i,initial:"initial",whileInView:"animate",x1:"0",y1:"0",x2:"0",y2:"100%",stroke:"white",strokeWidth:"2"})}),m.map((a,o)=>e(d,{...a,index:o},o))]})})]})})})};export{h as default};
