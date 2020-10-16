package com.coopeuch.springbootmysqlcrud.model;

import javax.persistence.*;
import java.io.Serializable;

@MappedSuperclass
@Access(AccessType.FIELD)
public class ParentEntity implements Serializable {

    private static final long serialVersionUID = -2020954428685943480L;

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="identificador", unique = true, nullable = false)
    private Long id;


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
}
