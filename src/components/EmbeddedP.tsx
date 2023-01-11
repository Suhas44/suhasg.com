const EmbeddedP = ({ fontSize, children }: { fontSize: number, children: any }) => {
    return (
        <div>
            <p style={{ fontSize: fontSize }}>{children}</p>
        </div>
    );
}

export default EmbeddedP;