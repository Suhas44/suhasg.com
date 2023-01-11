const EmbeddedLink = ({ href, children }: { href: string, children: any }) => {
    return (
        <a style={{ textDecoration: 'none' }} href={href}>{children}</a>
    );
}

export default EmbeddedLink;