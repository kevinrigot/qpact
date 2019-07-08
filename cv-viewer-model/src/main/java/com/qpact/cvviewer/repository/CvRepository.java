package com.qpact.cvviewer.repository;

import com.qpact.cvviewer.model.Cv;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface CvRepository extends CrudRepository<Cv, String> {

    List<Cv> findAll();

}
