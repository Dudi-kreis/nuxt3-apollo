module.exports = {
    darkMode: 'class',
    plugins:[
        require('tailwindcss-dark-mode')()
    ],
    variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
        borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
        textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
    }
}
