package com.qpact.cvviewer.rest.service;

import com.qpact.cvviewer.rest.model.Cv;
import com.qpact.cvviewer.rest.model.CvSummary;
import com.qpact.cvviewer.model.entity.CvDo;
import com.qpact.cvviewer.rest.exception.NotFoundException;
import com.qpact.cvviewer.model.repository.CvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CvService {

    @Autowired
    private CvRepository cvRepository;
    @Autowired
    private CvMapper cvMapper;


    public List<CvSummary> getAllCv() {
        List<CvDo> allCvs = cvRepository.findAll();
        return cvMapper.listOfCvEntityToListOfCvSummaryResponse(allCvs);
    }

    public Cv getCvById(String cvId) {
        Optional<CvDo> cv = cvRepository.findById(cvId);
        if(!cv.isPresent()){
            throw new NotFoundException();
        }
        return cvMapper.cvEntityToCvResponse(cv.get());
    }
}
