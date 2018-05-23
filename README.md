https://trymcom.github.io/ec-api-format/

API対応フォーマットに変換します。

## マークアップ

HTMLは必須クラスが存在すれば、どのような形でも変換可能です。

### 例1

```html
<tr data-api="" data-cid="wsd003_002_003_KRWOYM0408_20180524">
  <th class="oc-api-name"></th>
  <td class="oc-api-price"></td>
  <td class="oc-api-pcode"></td>
  <td class="oc-api-link"></td>
</tr>
```

### 例2

```html
<li class="credit-item" data-api="" data-cid="wsd003_069_004_20180525">
  <span>
    <span class="oc-api-name"></span>
    <span class="oc-api-pcode"></span>
    <span class="oc-api-price"></span>
  </span>
  <span class="oc-api-link"></span>
</li>
```

## 原稿

商品名 品番 価格 or 商品名|品番|価格

### 例

```html
BLOUSE BLLTYM0407 ¥7,900+tax
SKIRT SKLTYM0458 ¥7,900+tax
PANTS PRLTYM1017 ¥9,900+tax
BAG BOL8YM0212 ¥7,500+tax
```