package com.coopeuch.springbootmysqlcrud.model;

import javax.persistence.*;
import java.text.SimpleDateFormat;

@Entity
@Table(name= "task")
@Access(AccessType.FIELD)
public class Task extends ParentEntity{

    private static final long serialVersionUID = -2222854997239571277L;

    @Column(name="descripcion", nullable = false, length = 255)
    private String descripcion;

    @Column(name="fecha_creacion", nullable = false, length = 255)
    String fechaCreacion;

    @Column(name="vigente", nullable = false)
    private boolean vigente;

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public boolean isVigente() {
        return vigente;
    }

    public void setVigente(boolean vigente) {
        this.vigente = vigente;
    }
}
