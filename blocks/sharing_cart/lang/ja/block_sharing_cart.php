<?php

$string['pluginname'] = '共有カート';

$string['backup'] = '共有カートへコピー';
$string['restore'] = 'コースへコピー';
$string['movedir'] = 'フォルダ移動';
$string['copyhere'] = 'ここにコピー';
$string['notarget'] = 'ターゲットが見つかりません';
$string['clipboard'] = 'この共有アイテムをコピーする';
$string['bulkdelete'] = '一括削除';
$string['confirm_backup'] = '共有カートにコピーしますか？';
$string['confirm_restore'] = 'コースにコピーしますか？';
$string['confirm_delete'] = '削除してよろしいですか？';
$string['confirm_delete_selected'] = '選択したアイテムを全て削除してもよろしいですか？';
$string['download'] = 'ダウンロード';

$string['conf_plugins_heading'] = 'プラグイン設定';
$string['conf_plugins_nothing'] = 'プラグインがインストールされていないので設定項目はありません。';
$string['conf_plugins_enabled_head'] = '有効にするプラグイン';
$string['conf_plugins_enabled_desc'] = '有効にするプラグインを選択します。Ctrlキーを押しながらクリックすることで複数選択できます。';

$string['err:record_id'] = '不正な共有アイテムIDです';
$string['err:course_id'] = '不正なコースIDです';
$string['err:section_id'] = '不正なセクションです';
$string['err:module_id'] = '不正なモジュールIDです';
$string['err:capability'] = 'この共有アイテムにアクセスする権限がありません';
$string['err:backup'] = 'バックアップ中にエラーが発生しました';
$string['err:restore'] = '復元中にエラーが発生しました';
$string['err:move'] = '共有アイテムの移動に失敗しました';
$string['err:delete'] = '共有アイテムの削除に失敗しました';
$string['err:record'] = 'DBアクセス時にエラーが発生しました';
$string['err:tempdir'] = '一時ディレクトリの作成に失敗しました';
$string['err:cleanup'] = 'クリーンアップ時にエラーが発生しました';

$string['err:not_implemented'] = 'バックアップをサポートしていないモジュールです';

$string['sharing_cart'] = $string['pluginname'];
$string['sharing_cart_help'] = file_get_contents(__DIR__.'/help/sharing_cart.html');
