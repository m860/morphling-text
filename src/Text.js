type Props = {
    text?: string,
    style?: Object,
    width: number,
    height: number,
    scale: number
};

export default function (React) {
    function Text(props: Props) {
        let style = Object.assign({}, props.style, {
            width: props.width,
            height: props.height
        });
        if ("fontSize" in style) {
            style.fontSize = style.fontSize * props.scale;
            //处理chrome字体小于12的问题
            //TODO 处理transform-origin的问题
            if (style.fontSize < 12) {
                if ("transform" in style) {
                    style.transform += `;scale(${style.fontSize / 12})`;
                } else {
                    style.transform = `scale(${style.fontSize / 12})`;
                }
            }
        }
        return <div style={style}>{props.text}</div>
    }

    Text.defaultProps = {
        text: "文本",
        style: {}
    };

    /**
     * 可编辑的属性
     */
    Text.getProperties = function () {
        return [];
    };

    return React.memo(Text);
}