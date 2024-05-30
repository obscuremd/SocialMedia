export const isMobile = window.innerWidth < 768

export const Shared = {
    Text:{
        xxl: isMobile ?'1.2rem': '2.2rem',
        xl: isMobile ? '1rem' : '2rem',
        large: isMobile ? '0.7rem' : '1.2rem',
        small: isMobile ? '0.6rem': '0.8rem',
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

export const gradient = 'linear-gradient(129deg, #D64975 -54.57%, #152046 94.11%)'