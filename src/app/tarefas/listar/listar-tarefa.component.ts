import { Component, OnInit } from '@angular/core';

import { Tarefa, TarefaService } from "../shared";

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    let confirmar = confirm(`Dejesa remover a ${tarefa.nome}?`);
    if(confirmar){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void{
    let confirmar = confirm(`Dejesa alterar a ${tarefa.nome}?`);
    if(confirmar){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
