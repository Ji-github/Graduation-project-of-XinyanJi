/**
 * lint-staged配置文件，根据FIX判断是否在lint后进行修改
 */
module.exports = {
    'src/**/*.{js,jsx,vue,ts,tsx}': (filenames) => {
        if (process.env.AGILE_CHECKIN_AUTHOR) {
            return `vue-cli-service lint ${filenames.join(' ')} --no-fix`;
        }
        return [`vue-cli-service lint ${filenames.join(' ')}`, `git add ${filenames.join(' ')}`];
    }
};