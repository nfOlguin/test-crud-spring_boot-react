package com.coopeuch.springbootmysqlcrud.model;

import javax.persistence.AccessType;
import javax.persistence.Access;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Access(AccessType.FIELD)
public class Task extends ParentEntity{

    private static final long serialVersionUID = -2222854997239571277L;

    @Column(name="descripcion", nullable = false, length = 255)
    private String descripcion;

    @Column(name="fechaCreacion", nullable = true, length = 255)
    private String fechaCreacion;

    @Column(name="vigente", nullable = true, length = 255)
    private String vigente;


}
