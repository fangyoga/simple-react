module.exports = {
    "plugins": [
        ["@babel/plugin-transform-runtime"],
    ],
    "presets": [
        ["@babel/preset-env"],
        ["@babel/preset-typescript"],
        [
            "@babel/preset-react",
            {
                "runtime": "classic", // 自定义 createElement 函数，需要将运行时设置为 "classic"
                "pragma": "Didact.createElement"
            }
        ],
    ]
}