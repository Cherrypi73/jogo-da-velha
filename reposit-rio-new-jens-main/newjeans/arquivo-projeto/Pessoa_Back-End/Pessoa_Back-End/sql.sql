CREATE TABLE produtos (
	codigo  SERIAL PRIMARY KEY,
	titulo TEXT NOT NULL,
	data_cadastro DATE NOT NULL,
	preco REAL NOT NULL,
	descricao TEXT NOT NULL,
	imagem TEXT NOT NULL
)
INSERT INTO produtos(titulo, data_cadastro, preco, descricao, imagem) 
VALUES 
('Vestido Dior Preto', '20220705', 20000 , 'Vestido Clássico usado pela integrante do BlackPink Jisoo.', 'https://vinvoy.com/upload/resize_cache/iblock/c9e/640_640_0/c9ed28af40eebcce78e7a53b0c82f221.jpg'),
('Vestido Branco Chanel 164', '19901105', 80000 , 'Vestido Clássico usado pela integrante do BlackPink Jennie.', 'https://i.pinimg.com/564x/22/e1/bb/22e1bbcf3f9390cd46de3066a06d691f.jpg'),
('Vestido Longo Saint Laurent', '20230720', 51170 , 'Vestilo Longo com Pregas, transparente e com decote.', 'https://assets.vtex.app/unsafe/1245x1830/center/middle/https%3A%2F%2Figuatemi365.vtexassets.com%2Farquivos%2Fids%2F212816%2FYSL_220912_004_0107-00.jpg'),
('Vestido LOLITA Celine', '20230606', 66900 , 'Vestido em seda Musselina preta antigo.', 'https://image-cdn.trenbe.com/open-api-product-images/616/20220803/3f63cae8-534f-4e86-a652-3567d3d29a36.jpg'),
('Vestido Preto Louis Vuitton', '19870505', 29000 , 'Vestido tamanhho P, básico.', 'https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vestido-justo-de-mangas-curtas-e-gola-alta--FJDR25NHY900_PM2_Front%20view.jpg')

('Bolsa Lady Dior Mini Preto', '19980910', 2220 , 'Bolsa Mini, Linha Italiana, Bolso interno com zíper.', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzYbTqhQhwm-npOCNLGhoFzY9qayKkoL4TkgevZOZq4wBPcyTmjccF-XxjvPgmtRD4vtx_YlxJe8mMFGttnQEzkvehlgsYWvi2XfuDf3dgxgh_cOCBLBVGYdg&usqp=CAE.jpg'),
('Bolsa Chanel Double Preta', '19881015', 61369 , 'Peça Original, em couro, com saco original e caixa.', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3H-zVFE2x-BPJjsX_zz2iOQexh2TzOJvfDHFsSf0QmI71gWmxzYus4aTL4Bsn6TdC_nQDxd4LEUompomC4njg9DIY9uCtbg&usqp=CAE.jpg'),
('Bolsa Loulou Saint Laurent', '20060920', 22350 , 'Bolsa em Couro Matelassê', 'https://assets.vtex.app/unsafe/1245x1830/center/middle/https%3A%2F%2Figuatemi365.vtexassets.com%2Farquivos%2Fids%2F1444733%2FYSL_220118_012_0333-00.jpg'),
('Bolsa Celine Mini Luggage', '20101009', 5500 , 'Smooth Calfskin Azul Marinho.', 'https://cdnimg.etiquetaunica.com.br/products/bolsa-celine-mini-luggage-smooth-calfskin-azul-marinho-chq438_176985.jpg'),
('Bolsa Nano Tiffany', '20221203', 5800 , 'Inspiradora, empoderadora e, acima de tudo, inabalável.', 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-tbolsa-nano-72017242_1059614_ED.jpg'),

('Sapato Dior Silk Preto', '19781012', 1800 , 'Sapato da dior confeccionado em couro com Bico Fino.', 'https://dptafza4tn3d0.cloudfront.net/cache/catalog/CV19153/sapato-dior-drapeado-silk-preto-CV19153(1)-750x937.jpg'),
('Botas Chanel Cano Baixo', '20030804',  26900, 'Malha & Couro De Novilho Envernizado, Preto.', 'https://www.chanel.com/images//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/short-boots-black-knit-patent-calfskin-knit-patent-calfskin-packshot-artistique-vue1-g40134y5656094305-9520009576478.jpg'),
('Sandália Opyum Saint Laurent', '20050505', 8750 , 'Sandália com acabamento de cetim e grandes laços.', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXF6jprrayU2-nAPdu9HiS5PPsCExlFi6f1NS77fmNV4bMFY_V8Fdt-Wq-Cwl0pOUlAhvpM_hCla91QcrQHnM3zHuzOfv0rHIRKUk4_36RjXh5zus1EP8z8Q&usqp=CAE.jpg'),
('Botas Bulky Laced Celine ', '20201105', 6500 , 'Butina preta fosca da celine.', 'https://twicpics.celine.com/product-prd/images/large/345597004C.38NO_3_SPR22_V2.jpg'),
('Sandália Louis Vuitton', '20001205', 16600  , 'Salto Alto, Tamanho 37, Social.', 'https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sandalia-shake--APVS1HTC02_PM2_Front%20view.jpg'),

('Perfume Dior Miss', '19991107', 500 , 'Dior Feminino Eau de Parfum.', 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw9ebda3a6/images/hi-res-BR/1.%203348901571432_1000px.jpg'),
('Perfume Chanel Coco Mademoiselle', '19830404', 1275 , 'Perfume Clássico Chanel criado na França em 1883.', 'https://cdn.awsli.com.br/600x450/364/364776/produto/100096645/a7b57f55b4.jpg'),
('Perfume Yves Saint Laurent', '20221009', 655 , 'Black Opium Feminino Eau de Parfum.', 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwf87687eb/images/hi-res-BR/black_opium_edp_50ml_1500px.jpg'),
('Perfume Celine Parade', '20220210', 2800 , 'Utilizado pela Lisa do BlackPink, 100ML.', 'https://twicpics.celine.com/product-prd/images/large/6PC1H0805.37TT_1_100ML_PARADE.jpg'),
('Perfume Tiffany Rose Gold', '20210910', 649 , 'Fresca e efervescente, Expressando o espírito de otimismo.', 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/eau-de-parfum-tiffany-rose-gold-69330541_1027848_ED.jpg')

