import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('HomePage')
                .child(S.document().schemaType('home-page').documentId('home-page').title('Home Page')),
            ]),
        ),
    ]);
