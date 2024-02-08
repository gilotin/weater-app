/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192, // or any other limit you prefer
                            name: "[name].[hash].[ext]",
                            outputPath: "images", // or the desired output path
                            esModule: false, // Set esModule to false
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = nextConfig;
