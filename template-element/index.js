// <template> の機能を検知するには、DOM 要素を作り、.content プロパティがあるかどうかを調べる

document.addEventListener("DOMContentLoaded", () => {
  const template = document.querySelector("#textTemplate").content;
  /*
    高速化！
    fragment 訳:破片，断片，かけら
    DocumentFragment は、従来のDOMツリーとは分離された独立した小さなDOMツリー!

    DocumentFragment (木構造の頂点のノードになる)
    |
    |--- <li>
    |
    |--- <li>
    |
    |--- <li>

   こういう状態をつくってまとめて一回だけDOMにアクセスして追加すると良いみたいです。
*/
  const fragment = document.createDocumentFragment();

  // テンプレートのノードを複製
  // deep が true に設定された場合、 externalNode およびその子孫全てが複製されます。
  const clone = document.importNode(template, true)
  const p = document.createElement('p');
  p.textContent = '本文';
  clone.appendChild(p)
  fragment.appendChild(clone)

  const clone2 = document.importNode(template, true)
  const p2 = document.createElement('p');
  p2.textContent = '本文2';
  clone2.appendChild(p2)
  fragment.appendChild(clone2)

  document.querySelector('#contents').appendChild(fragment)
});