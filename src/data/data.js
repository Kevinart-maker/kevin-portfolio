import cv from '/src/assets/Kevin - developer Resume.pdf'


const handleDownload = () => {
    const url = cv
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'kevin-cv')
    document.body.appendChild(link)
    link.click();
}
const handleSecondDownload = () => {
    const url = cv2
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'kevin-graphics-cv')
    document.body.appendChild(link)
    link.click();
}

// const checkOutMyDesigns = () => {
//     return(
//         <span>
//             With a background in graphics design spanning three years, I transitioned seamlessly into the realm of software engineering. My journey through design honed my eye for detail, cultivated creativity, and instilled a passion for user-centric solutions. Leveraging my experience, I merge the artistry of design with the precision of code, crafting intuitive digital experiences that captivate and inspire Do you wish to see some of my <strong>
//                 <a href="https://www.behance.net/kevinart2">
//                     designs
//                 </a>
//             </strong>.
//         </span>
//     )
// }



export default[
    {
        id: 1,
        subject: 'Engineering',
        subSubject: 'View Github',
        icon: 'fa-brands fa-github',
        content: "Drawing upon my expertise as a seasoned programmer, I possess the unique ability to tackle intricate technical challenges while crafting websites that exude sleekness and visual allure. Moreover, my extensive knowledge of recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every aspect of your website is finely tuned to perfection.",
        link: "https://github.com/Kevinart-maker",
        button: handleDownload
    },
    {
        id: 2,
        subject: 'Design',
        subSubject: 'View Behance',
        icon: 'fa-brands fa-square-behance',
        content: "With a background in graphics design spanning three years, I transitioned seamlessly into the realm of software engineering. I merge the artistry of design with the precision of code, crafting intuitive digital experiences that captivate and inspire. Check out some of my old designs on behance.",
        link: "https://www.behance.net/kevinart2",
    }
]