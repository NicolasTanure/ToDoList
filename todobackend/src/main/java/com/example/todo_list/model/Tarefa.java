package com.example.todo_list.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private boolean concluida;
}