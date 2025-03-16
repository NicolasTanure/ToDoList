package com.example.todo_list.service;

import com.example.todo_list.model.Tarefa;
import com.example.todo_list.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    // Criar uma nova tarefa
    public Tarefa criarTarefa(Tarefa tarefa) {
        return tarefaRepository.save(tarefa);
    }

    // Listar todas as tarefas
    public List<Tarefa> listarTarefas() {
        return tarefaRepository.findAll();
    }

    // Buscar uma tarefa por ID
    public Optional<Tarefa> buscarTarefaPorId(Long id) {
        return tarefaRepository.findById(id);
    }

    // Atualizar uma tarefa
    public Tarefa atualizarTarefa(Long id, Tarefa tarefaAtualizada) {
        return tarefaRepository.findById(id)
                .map(tarefa -> {
                    tarefa.setTitulo(tarefaAtualizada.getTitulo());
                    tarefa.setDescricao(tarefaAtualizada.getDescricao());
                    tarefa.setConcluida(tarefaAtualizada.isConcluida());
                    return tarefaRepository.save(tarefa);
                })
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    }

    // Deletar uma tarefa
    public void deletarTarefa(Long id) {
        tarefaRepository.deleteById(id);
    }

    public Optional<Tarefa> buscarTarefaPorTitulo(String titulo) {
        return tarefaRepository.findByTitulo(titulo);
    }
}