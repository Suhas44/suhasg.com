const EmbeddedP = ({ fontSize, style, children }: { fontSize: number, style?: object, children: any }) => {
    return (
        <div>
            <p style={{ fontSize: fontSize, ...style }}>{children}</p>
        </div>
    );
}

export default EmbeddedP;