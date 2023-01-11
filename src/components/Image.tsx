const imgRedirect = (url: string) => {
    window.open(url, "_blank");
}

const Image = ({ src, href, style }: { src: string, href?: string, style: object }) => {
    return (
        <img style={style} src={src} alt="" onClick={href ? () => imgRedirect(href) : () => { }}></img>
    );
}

export default Image;