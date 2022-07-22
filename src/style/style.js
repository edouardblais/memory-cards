const general = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#18181b',
    display: 'flex',
    flexDirection: 'column',
    fontSize:'1vh',
    boxSizing:'border-box',
    margin:'-8px',
    padding:'0',
    fontFamily:'Playfair Display, serif',
    color:'#f8fafc',
}

const main = {
    flex:'1',
    display:'flex',
    flexDirection:'column',
    padding:'1vh',
    justifyContent:'center',
    alignItems:'center',
    gap: '1.5vh',
    maxHeight:'90vh'

}

const header = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    color:'white',
    fontSize:'5vh',
    fontWeight:'700',
    height:'5vh',
    padding:'1vh',
}

const footer = {
    fontStyle:'italic',
    fontSize:'2vh',
    justifyContent:'center',
    display:'flex',
    alignItems:'center',
    fontWeight:'bold',
    height:'3vh',
    padding:'.5vh'
}

const imagecontainer = {
    display:'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows:'repeat (4, 1fr)',
    maxWidth:'70vw',
    justifyItems:'center',
    alignItems:'center',
    gap:'1vh',
}

const image = {
    maxHeight:'25vh',
    border:'#f8fafc solid .5vw',
    boxSizing:'border-box',
    borderRadius: '.5vw'
}

const score = {
    fontSize:'3vh'
}

const button = {
    fontFamily:'Playfair Display, serif',
    fontWeight:'bold',
    backgroundColor:'#18181b',
    cursor:'pointer',
    border:'1px solid #f8fafc',
    color:'#f8fafc',
    height:'3vh',
    fontSize:'2vh',
}


const style = {
    general:general,
    main:main,
    header:header,
    footer:footer,
    imagecontainer:imagecontainer,
    image:image,
    score:score,
    button:button,
}

export {style}