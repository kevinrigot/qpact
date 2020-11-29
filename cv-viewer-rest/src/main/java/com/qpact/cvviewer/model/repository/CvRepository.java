package com.qpact.cvviewer.model.repository;

import com.qpact.cvviewer.model.entity.CvDo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CvRepository extends CrudRepository<CvDo, String> {

    List<CvDo> findAll();

    Optional<CvDo> findByEmail(String email);

}
