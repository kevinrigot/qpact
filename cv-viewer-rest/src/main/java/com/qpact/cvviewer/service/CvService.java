package com.qpact.cvviewer.service;

import com.qpact.cvviewer.apimodel.Cv;
import com.qpact.cvviewer.apimodel.CvSummary;
import com.qpact.cvviewer.exception.NotFoundException;
import com.qpact.cvviewer.repository.CvRepository;
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
        List<com.qpact.cvviewer.model.Cv> allCvs = cvRepository.findAll();
        return cvMapper.listOfCvEntityToListOfCvSummaryResponse(allCvs);
    }

    public Cv getCvById(String cvId) {
        Optional<com.qpact.cvviewer.model.Cv> cv = cvRepository.findById(cvId);
        if(!cv.isPresent()){
            throw new NotFoundException();
        }
        return cvMapper.cvEntityToCvResponse(cv.get());
    }
}
