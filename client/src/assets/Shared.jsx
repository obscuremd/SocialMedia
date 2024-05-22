const isMobile = window.innerWidth < 768

export const Shared = {
    Text:{
        xxl: isMobile ?19.998: 52.361 ,
        xl: isMobile ? 12.361 : 32.36,
        large: isMobile ? 10 : 20,
        small: isMobile ? 8: 12.36,
    }
}

export const ToasterStyle ={backgroundColor:'#292B3B', borderRadius:15, border:'1px solid #797da9', color:'#fff'}

export const gradientTextStyle = {
    fontWeight: 'bold',
    fontSize: Shared.Text.small,
    backgroundImage: 'linear-gradient(92deg, #D64975 66.33%, #4A53A9 98.7%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text', // For Safari/Chrome
    color: 'transparent'
};