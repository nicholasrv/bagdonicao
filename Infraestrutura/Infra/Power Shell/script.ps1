$outrosNomes = (0)

foreach($nome in $(Get-Content -Path .\listaDeNomes.txt)) {
	Write-Output "O nome e $nome"
    if ($nome -eq "Pedro") {
        Write-Output "Encontrou $nome"
      } else {
         $outrosNomes++
      }
}
Write-Output "$outrosNomes pessoas nao eram Pedro"




  




  