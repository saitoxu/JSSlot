<?php
echo "<!DOCTYPE html>";
echo "<head>";
echo "<meta charset=\"utf-8\">";
echo "<title>問題解きなはれ</title>";
echo "</head>";
echo "<body>";
echo "<table id='table'><tbody><tr align=\"center\"><td>残ってる問題：</td>";
$chapter = $_POST['chapter'];
$num = $_POST['num'];
for ($i = 0; $i < 4; $i++) {
    if ($_POST['people'][$i] != NULL) {
        $elem[] = $_POST['people'][$i];
    }
}
if ($elem != NULL) {
    $list = join(",", $elem);
}
// echo var_dump($list);
for ($i = 1; $i <= $num; $i++) {
    echo "<td>$i</td>";
}
echo "</tr></tbody></table>";
echo "<div class=\"col\">";
echo "問　題：<span id=\"num\">?</span><br>";
echo "</div>";
echo "<div class=\"col\">";
echo "解答者：<span id=\"people\">？？</span><br>";
echo "</div>";
echo "<input type=\"button\" value=\"START\" id=\"button\">";
echo "</body>";
echo "<script> var chapter = $chapter; </script>";
echo "<script> var num = $num; </script>";
echo "<script> var list = \"$list\"; </script>";
echo "<script type=\"text/javascript\" src=\"slot.js\"></script>";
echo "</html>";
?>
