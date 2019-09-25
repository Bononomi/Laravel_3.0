<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App;

class PopularTabela extends Command {

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:popular';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Preenche as tabelas';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    public function handle() {

        $arrayCategorias [] = "Categoria 1";
        $arrayCategorias [] = "Categoria 2";
        $arrayCategorias [] = "Categoria 3";
        
        foreach ($arrayCategorias as $cat) {
            $categoria = new App\Categoria();
            $categoria->nomcat = $cat;
            $categoria->save();
        }
        
        //Defini no modelo
        //protected $primaryKey = 'codcat';
        
       // App\Categoria::where('codcat', 1)->delete();
       /// App\Categoria::where('codcat', 5)->delete();
        
      ///  $categoriaSelecionada = App\Categoria::find(10);
       /// $categoriaSelecionada->nomcat = "oioioioioi";
        //$categoriaSelecionada->save();
   
      //  $listaCategorias = App\Categoria::all();
        
       // foreach ($listaCategorias as $l) {
        //    $this->info($l->nomcat);
           
       // }
        
        
    }

}
