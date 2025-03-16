package com.example.todo_list.controller;

import com.example.todo_list.model.Tarefa;
import com.example.todo_list.service.TarefaService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000") // Permite requisições do frontend React
@RestController
@RequestMapping("/tarefas")
public class TarefaController {
    @Autowired
    private TarefaService tarefaService;

    
    @PostMapping
    public Tarefa criarTarefa(@RequestBody Tarefa tarefa) {
        return tarefaService.criarTarefa(tarefa);
    }

    // Listar todas as tarefas
    @GetMapping
    public List<Tarefa> listarTarefas() {
        return tarefaService.listarTarefas();
    }

    // Buscar uma tarefa por ID
    @GetMapping("/{id}")
    public Tarefa buscarTarefaPorId(@PathVariable Long id) {
        return tarefaService.buscarTarefaPorId(id)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    }

    // Atualizar uma tarefa
    @PutMapping("/{id}")
    public Tarefa atualizarTarefa(@PathVariable Long id, @RequestBody Tarefa tarefaAtualizada) {
        return tarefaService.atualizarTarefa(id, tarefaAtualizada);
    }

    // Deletar uma tarefa
    @DeleteMapping("/{id}")
    public void deletarTarefa(@PathVariable Long id) {
        tarefaService.deletarTarefa(id);
    }
}
