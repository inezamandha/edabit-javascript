import countdown from './index';

describe('Javascript - Medium - 36', () => {
  test('Making a Countdown', () => {
    expect(countdown(10, 'Blast Off')).toBe(
      '10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(3, 'go')).toBe('3. 2. 1. GO!');
    expect(countdown(5, 'FIRE')).toBe('5. 4. 3. 2. 1. FIRE!');
    expect(countdown(12, 'watch out')).toBe(
      '12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(7, 'fire')).toBe('7. 6. 5. 4. 3. 2. 1. FIRE!');
    expect(countdown(16, 'shoot')).toBe(
      '16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!'
    );
    expect(countdown(28, 'fire')).toBe(
      '28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!'
    );
    expect(countdown(14, 'watch out')).toBe(
      '14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(29, 'take down')).toBe(
      '29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(8, 'boom')).toBe('8. 7. 6. 5. 4. 3. 2. 1. BOOM!');
    expect(countdown(24, 'blast off')).toBe(
      '24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(3, 'boom')).toBe('3. 2. 1. BOOM!');
    expect(countdown(16, 'watch out')).toBe(
      '16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(16, 'blast off')).toBe(
      '16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(24, 'boom')).toBe(
      '24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!'
    );
    expect(countdown(2, 'watch out')).toBe('2. 1. WATCH OUT!');
    expect(countdown(1, 'shoot')).toBe('1. SHOOT!');
    expect(countdown(16, 'go')).toBe(
      '16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!'
    );
    expect(countdown(26, 'watch out')).toBe(
      '26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(5, 'blast off')).toBe('5. 4. 3. 2. 1. BLAST OFF!');
    expect(countdown(26, 'go')).toBe(
      '26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!'
    );
    expect(countdown(29, 'go')).toBe(
      '29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!'
    );
    expect(countdown(26, 'shoot')).toBe(
      '26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!'
    );
    expect(countdown(25, 'watch out')).toBe(
      '25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(16, 'blast off')).toBe(
      '16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(21, 'take down')).toBe(
      '21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(23, 'take down')).toBe(
      '23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(5, 'fire')).toBe('5. 4. 3. 2. 1. FIRE!');
    expect(countdown(13, 'blast off')).toBe(
      '13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(1, 'boom')).toBe('1. BOOM!');
    expect(countdown(15, 'shoot')).toBe(
      '15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!'
    );
    expect(countdown(12, 'shoot')).toBe(
      '12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!'
    );
    expect(countdown(3, 'take down')).toBe('3. 2. 1. TAKE DOWN!');
    expect(countdown(27, 'fire')).toBe(
      '27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!'
    );
    expect(countdown(17, 'shoot')).toBe(
      '17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!'
    );
    expect(countdown(17, 'take down')).toBe(
      '17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(17, 'watch out')).toBe(
      '17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(12, 'shoot')).toBe(
      '12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!'
    );
    expect(countdown(18, 'take down')).toBe(
      '18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(8, 'blast off')).toBe(
      '8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(15, 'watch out')).toBe(
      '15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(18, 'go')).toBe(
      '18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!'
    );
    expect(countdown(7, 'boom')).toBe('7. 6. 5. 4. 3. 2. 1. BOOM!');
    expect(countdown(23, 'take down')).toBe(
      '23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(25, 'take down')).toBe(
      '25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(28, 'boom')).toBe(
      '28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!'
    );
    expect(countdown(22, 'shoot')).toBe(
      '22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!'
    );
    expect(countdown(19, 'boom')).toBe(
      '19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!'
    );
    expect(countdown(30, 'fire')).toBe(
      '30. 29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!'
    );
    expect(countdown(28, 'watch out')).toBe(
      '28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(26, 'fire')).toBe(
      '26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!'
    );
    expect(countdown(12, 'take down')).toBe(
      '12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(19, 'boom')).toBe(
      '19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!'
    );
    expect(countdown(30, 'shoot')).toBe(
      '30. 29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!'
    );
    expect(countdown(13, 'fire')).toBe(
      '13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!'
    );
    expect(countdown(19, 'blast off')).toBe(
      '19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(17, 'take down')).toBe(
      '17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(1, 'watch out')).toBe('1. WATCH OUT!');
    expect(countdown(9, 'shoot')).toBe('9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!');
    expect(countdown(22, 'take down')).toBe(
      '22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(4, 'fire')).toBe('4. 3. 2. 1. FIRE!');
    expect(countdown(7, 'shoot')).toBe('7. 6. 5. 4. 3. 2. 1. SHOOT!');
    expect(countdown(19, 'blast off')).toBe(
      '19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(6, 'go')).toBe('6. 5. 4. 3. 2. 1. GO!');
    expect(countdown(20, 'boom')).toBe(
      '20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!'
    );
    expect(countdown(12, 'boom')).toBe(
      '12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!'
    );
    expect(countdown(20, 'boom')).toBe(
      '20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!'
    );
    expect(countdown(27, 'take down')).toBe(
      '27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!'
    );
    expect(countdown(6, 'blast off')).toBe('6. 5. 4. 3. 2. 1. BLAST OFF!');
    expect(countdown(6, 'shoot')).toBe('6. 5. 4. 3. 2. 1. SHOOT!');
    expect(countdown(19, 'blast off')).toBe(
      '19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!'
    );
    expect(countdown(15, 'watch out')).toBe(
      '15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!'
    );
    expect(countdown(4, 'blast off')).toBe('4. 3. 2. 1. BLAST OFF!');
    expect(countdown(21, 'go')).toBe(
      '21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!'
    );
    expect(countdown(5, 'bang')).toBe('5. 4. 3. 2. 1. BANG!');
  });
});
