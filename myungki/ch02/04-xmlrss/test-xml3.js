// 모듈로드
const parseString = require('xml2js').parseString;

// 테스트용 XML데이터
const xml =
`<items>
    <item>
        <name>Banana</name>
        <price>130</price>
    </item>
    <item>
        <name>Apple</name>
        <price>300</price>
    </item>
    <item>
        <name>Pear</name>
        <price>250</price>
    </item>
</items>`;

// XML 전달
parseString(xml, (err, r) => {
    console.log(JSON.stringify(r));

    // 각 요소의 표시
    console.log('------');
    console.log(r.items.item[0].name[0]);
    console.log(r.items.item[0].price[0]);
});
