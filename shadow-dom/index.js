// Shadow DOMは、HTML要素に、隠されたDOMを追加する機能

const host = document.querySelector('.host');
const root = host.attachShadow({mode: 'open'});

// html要素作成
const p = document.createElement('p')
p.textContent = 'これがHTML要素'

// style要素を作成
const style = document.createElement('style')
// :hostはshadow dom内
style.textContent = ':host {background: grey;}p { color: #22b8cf }'

root.appendChild(style)
root.appendChild(p)