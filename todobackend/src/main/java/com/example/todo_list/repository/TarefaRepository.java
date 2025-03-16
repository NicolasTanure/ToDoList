package com.example.todo_list.repository;

import com.example.todo_list.model.Tarefa;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
    Optional<Tarefa> findByTitulo(String titulo);
}