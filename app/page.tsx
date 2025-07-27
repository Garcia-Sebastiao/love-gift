"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Music,
  MicOffIcon as MusicOff,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Star,
  Sparkles,
} from "lucide-react";
import { Image004, Image01, Image02, Image03, Image05 } from "@/assets";
import Image from "next/image";

// Floating Hearts Animation Component
function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-up opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
        </div>
      ))}
    </div>
  );
}

// Balloons Animation Component
function FloatingBalloons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-balloon"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <div
            className={`w-8 h-10 rounded-full ${
              ["bg-pink-300", "bg-purple-300", "bg-blue-300", "bg-yellow-300"][
                i % 4
              ]
            } opacity-80`}
          />
          <div className="w-px h-12 bg-gray-400 mx-auto" />
        </div>
      ))}
    </div>
  );
}

// Fireworks Component
function Fireworks() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-firework"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 40}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div className="relative">
            {[...Array(8)].map((_, j) => (
              <div
                key={j}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-sparkle"
                style={{
                  transform: `rotate(${j * 45}deg) translateY(-20px)`,
                  animationDelay: `${j * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Start Screen Component
function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />
      <FloatingBalloons />

      <div className="text-center z-10 w-full max-w-3xl">
        <div className="animate-bounce mb-6 sm:mb-8">
          <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-pink-500 fill-pink-500 mx-auto mb-4" />
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold text-pink-600 mb-4 animate-pulse leading-tight"
          style={{ fontFamily: "cursive" }}
        >
          Feliz aniversário de 1 ano!
        </h1>

        <p
          className="text-lg sm:text-2xl md:text-3xl text-purple-600 mb-6 sm:mb-8 animate-fade-in px-4"
          style={{ fontFamily: "cursive" }}
        >
          Um ano cheio de amor, sorrisos, lutas e muitas memórias ✨
        </p>

        <Button
          onClick={onStart}
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
        >
          Vamos explorar nossa história💞
        </Button>
      </div>
    </div>
  );
}

// Timeline Component
function Timeline({ onNext }: { onNext: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  // CUSTOMIZE: Edit these timeline moments with your own story
  const timelineSteps = [
    {
      title: "Primeiro Contato",
      date: "Fevereiro 18, 2019",
      description:
        "O dia que nossos olhos se cruzaram pela primeira vez, e um mundo novo nnasceu em mim✨",
      quote: "Em uma sala cheia de pessoas, eu apena via você",
      emoji: "👀",
    },
    {
      title: "Primeiro Date",
      date: "Maio, 2023",
      description:
        "Engraçado mas nosso primeiro date (primeira saida juntos) só foi acontecer 4 anos depois, em um cinema rsrs🎞️",
      quote: "O tempo voa quando se está apaixonado",
      emoji: "🎞️",
    },
    {
      title: "Primeiro Beijo",
      date: "Julho 27, 2024",
      description:
        "Hoje completa exatamento 1 ano desde que provei os teus lábios pela primeira vez. E pra mim nunca será apenas um beijo💫",
      quote: "Os teus lábios fizeram-me sentir em casa",
      emoji: "💋",
    },
    {
      title: "Primeiro culto juntos",
      date: "Dezembro 1, 2024",
      description:
        "A primeira vez que fomos a igreja juntos, foi um dia verdadeiramente abençoado⛪",
      quote: "CQue Cristo seja o centro de nosso relacionamento✝️",
      emoji: "✝️",
    },
    {
      title: "Futuro",
      date: "Incerto",
      description:
        "O futuro em incerto, mas os sonhos que quero viver do teu lado são ainda mais verdadeiros💞",
      quote: "Do teu lado eu me sinto seguro",
      emoji: "🏡",
    },
  ];

  const nextStep = () => {
    if (currentStep < timelineSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onNext();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-xl">
        <CardContent className="p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-4xl font-bold text-purple-600 mb-2"
              style={{ fontFamily: "cursive" }}
            >
              Nossa história de amor
            </h2>
            <div className="flex justify-center space-x-2 mb-4">
              {timelineSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index <= currentStep ? "bg-pink-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in px-2">
            <div className="text-4xl sm:text-6xl mb-4">
              {timelineSteps[currentStep].emoji}
            </div>
            <h3
              className="text-xl sm:text-3xl font-bold text-pink-600 mb-2"
              style={{ fontFamily: "cursive" }}
            >
              {timelineSteps[currentStep].title}
            </h3>
            <p className="text-sm sm:text-lg text-purple-500 mb-4">
              {timelineSteps[currentStep].date}
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
              {timelineSteps[currentStep].description}
            </p>
            <blockquote
              className="text-lg sm:text-xl italic text-pink-600 mb-6 sm:mb-8"
              style={{ fontFamily: "cursive" }}
            >
              "{timelineSteps[currentStep].quote}"
            </blockquote>
          </div>

          <div className="flex justify-between items-center gap-4">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0}
              variant="outline"
              className="flex items-center space-x-1 sm:space-x-2 bg-transparent text-sm sm:text-base px-3 sm:px-4 py-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </Button>

            <span className="text-xs sm:text-sm text-gray-500">
              {currentStep + 1} of {timelineSteps.length}
            </span>

            <Button
              onClick={nextStep}
              className="bg-pink-500 hover:bg-pink-600 text-white flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base px-3 sm:px-4 py-2"
            >
              <span>
                {currentStep === timelineSteps.length - 1 ? "Continue" : "Next"}
              </span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Quiz Component
function Quiz({ onNext }: { onNext: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // CUSTOMIZE: Edit these quiz questions with your own couple trivia
  const questions = [
    {
      question: "Onde foi nosso primeiro encontro após voltarmos a falar?",
      options: ["Cinema", "Restaurante", "Parque", "Praia"],
      correct: 0,
      funFact: "Nenhum filme será mais divertido que você! 💞",
    },
    {
      question: "Qual a minha coisa favorita sobre você?",
      options: ["Teu sorriso", "Tua gargalhada", "Tua gentileza", "TUDO!"],
      correct: 3,
      funFact: "É impossível escolher só um! 💕",
    },
    {
      question: "Qual estilo de filme nós vimos pela primeira vez?",
      options: ["Romance", "Comedia", "Acção", "terror"],
      correct: 3,
      funFact: "você nem assistiu direito de tanto medo! 😂",
    },
    {
      question: "Qual nossa música?",
      options: [
        "Perfect by Ed Sheeran",
        "All of Me",
        "Thinking Out Loud",
        "Dandelions",
      ],
      correct: 3,
      funFact: "Uma música que me lembra da tua beleza🎵",
    },
    {
      question: "Qual comida u fiz pra você em minha casa?",
      options: ["Panquecas", "Funge", "Macarrão com frango", "Waffles"],
      correct: 2,
      funFact: "E ainda dizes que não tenho geito na cozinha😭!",
    },
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8 text-center">
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
            <h2
              className="text-4xl font-bold text-purple-600 mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Quiz completo!
            </h2>
            <p className="text-2xl text-pink-600 mb-6">
              Você acertou {score} de {questions.length}!
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {score === questions.length
                ? "Perfeito! Sabes tudo sobre nós! 💕"
                : score >= questions.length / 2
                ? "Bom trabalho, você é uma expert do amor rsrs! 💖"
                : "Aww, não te preocupes, precisamos contruir mais memórias juntos💞"}
            </p>
            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white px-8 py-3 text-lg rounded-full"
            >
              Continue nossa jornada 🌟
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-xl">
        <CardContent className="p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-4xl font-bold text-blue-600 mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Quiz do amor 💝
            </h2>
            <div className="flex justify-center space-x-2 mb-4">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index < currentQuestion
                      ? "bg-green-500"
                      : index === currentQuestion
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-2xl font-bold text-purple-600 mb-4 sm:mb-6 px-2">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-2 sm:space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                  className={`w-full p-3 sm:p-4 text-left transition-all duration-300 text-sm sm:text-base min-h-[48px] ${
                    showFeedback
                      ? index === questions[currentQuestion].correct
                        ? "bg-green-500 hover:bg-green-500 text-white"
                        : selectedAnswer === index
                        ? "bg-red-500 hover:bg-red-500 text-white"
                        : "bg-gray-200 hover:bg-gray-200 text-gray-600"
                      : "bg-white hover:bg-purple-50 text-gray-800 border-2 border-purple-200 hover:border-purple-400"
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>

            {showFeedback && (
              <div className="mt-4 sm:mt-6 animate-fade-in px-2">
                <div className="flex justify-center mb-2">
                  {selectedAnswer === questions[currentQuestion].correct ? (
                    <div className="flex items-center space-x-2 text-green-600">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                      <span className="text-lg sm:text-xl font-bold">
                        Correct!
                      </span>
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-pink-600">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-lg sm:text-xl font-bold">
                        Nice try!
                      </span>
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  )}
                </div>
                <p className="text-purple-600 italic text-sm sm:text-base">
                  {questions[currentQuestion].funFact}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Photo Gallery Component
function PhotoGallery({ onNext }: { onNext: () => void }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // CUSTOMIZE: Replace with your actual photos and captions
  const photos = [
    {
      src: Image01,
      caption: "",
      emoji: "🤳",
    },
    {
      src: Image02,
      caption: "",
      emoji: "🍽️",
    },
    {
      src: Image03,
      caption: "",
      emoji: "🏖️",
    },
    {
      src: Image004,
      caption: "",
      emoji: "🏠",
    },
    {
      src: Image05,
      caption: "",
      emoji: "🥾",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl">
        <CardContent className="p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-4xl font-bold text-pink-600 mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Linha de memórias 📷
            </h2>
            <p className="text-sm sm:text-lg text-purple-600">
              Uma coleção de nossa jornada juntos💞
            </p>
          </div>

          <div className="relative mb-6 sm:mb-8">
            <div className="aspect-square max-w-xs sm:max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src={photos[currentPhoto].src || "/placeholder.svg"}
                alt={photos[currentPhoto].caption}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center mt-4">
              <div className="text-3xl sm:text-4xl mb-2">
                {photos[currentPhoto].emoji}
              </div>
              <p
                className="text-lg sm:text-xl text-gray-700 px-4"
                style={{ fontFamily: "cursive" }}
              >
                {photos[currentPhoto].caption}
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mb-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentPhoto
                    ? "bg-pink-500 scale-125"
                    : "bg-gray-300 hover:bg-pink-300"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mb-6 sm:mb-8 gap-4">
            <Button
              onClick={() =>
                setCurrentPhoto(
                  currentPhoto > 0 ? currentPhoto - 1 : photos.length - 1
                )
              }
              variant="outline"
              className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base px-3 sm:px-4 py-2 min-h-[44px]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </Button>

            <span className="text-xs sm:text-sm text-gray-500">
              {currentPhoto + 1} of {photos.length}
            </span>

            <Button
              onClick={() =>
                setCurrentPhoto(
                  currentPhoto < photos.length - 1 ? currentPhoto + 1 : 0
                )
              }
              variant="outline"
              className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base px-3 sm:px-4 py-2 min-h-[44px]"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <Button
              onClick={onNext}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full w-full sm:w-auto"
            >
              Continuar para declaração de amor 💌
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Love Letter Component
function LoveLetter({ onNext }: { onNext: () => void }) {
  const [isRevealed, setIsRevealed] = useState(false);

  // CUSTOMIZE: Write your own heartfelt love letter here
  const loveLetterText = `💌 Carta para Minha Rainha — 1 Ano de Amor

Meu amor, minha rainha,

Hoje completamos 1 ano de história, e eu ainda me pego pensando em como fui tão abençoado por ter você na minha vida. ❤️

Esse tempo ao teu lado foi como um sopro de luz num mundo que por vezes parece escuro demais. Você trouxe cor, direção e paz para a minha caminhada — e tudo isso com esse teu jeito único de ser. 🌷

Nem sempre tivemos dias fáceis, mas até nos momentos difíceis, tua presença foi abrigo. Teu carinho é meu refúgio, teu sorriso é meu motivo e tua força é a razão pela qual eu continuo querendo ser um homem melhor. 💪🏽

Durante esse ano, aprendi que o amor verdadeiro não é só sobre sentir, mas também sobre construir. E construir contigo tem sido a coisa mais bonita que já vivi. Obrigado por me ensinar a amar com mais verdade, com mais paciência, com mais fé. 🙏🏽

Hoje, mesmo sem poder te dar presentes caros ou um jantar de cinema, te dou algo muito mais sincero:
Todo o meu coração, toda a minha intenção, todo o meu amor. 💘

Preparei esse pequeno presente com as mãos e a alma. Porque você merece tudo que for feito com amor. E esse site, cada linha dele, foi pensada pra te fazer sorrir. Porque teu sorriso é o que eu mais amo nesse mundo. ✨

Feliz 1 ano, minha rainha. Que venham muitos mais.
Eu te amo. Mais do que palavras, mais do que promessas.

Com todo o amor do mundo,
Garcia Sebastião 🥰
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-sm shadow-xl">
        <CardContent className="p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-4xl font-bold text-purple-600 mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Uma carta secreta de amor💌
            </h2>
            <p className="text-sm sm:text-lg text-pink-600">
              Algo espeial apenas para ti...
            </p>
          </div>

          {!isRevealed ? (
            <div className="text-center">
              <div className="relative inline-block mb-6 sm:mb-8 animate-pulse">
                <div className="w-24 h-18 sm:w-32 sm:h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg shadow-lg transform rotate-3">
                  <div className="absolute inset-2 bg-white rounded border-2 border-pink-300 flex items-center justify-center">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-pink-500" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">💕</span>
                </div>
              </div>

              <Button
                onClick={() => setIsRevealed(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Abrir a carta secreta 💌
              </Button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 sm:p-8 rounded-lg border-2 border-pink-200 shadow-inner">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center space-x-2 text-pink-600">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  </div>
                </div>

                <div
                  className="prose prose-sm sm:prose-lg max-w-none text-gray-700 text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: "cursive" }}
                >
                  {loveLetterText.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-3 sm:mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="text-center mt-6 sm:mt-8">
                  <div className="inline-flex items-center space-x-2 text-pink-600 mb-4 sm:mb-6">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  </div>

                  <Button
                    onClick={onNext}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full w-full sm:w-auto"
                  >
                    Vamos celebrar 🎉
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Final Celebration Component
function Celebration({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden px-4">
      <Fireworks />
      <FloatingHearts />

      <div className="text-center z-10 w-full max-w-lg">
        <div className="animate-bounce mb-6 sm:mb-8">
          <div className="flex justify-center items-center space-x-2 sm:space-x-4">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 fill-pink-500" />
            <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-500" />
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 fill-pink-500" />
          </div>
        </div>

        <h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-purple-600 mb-4 sm:mb-6 animate-pulse leading-tight"
          style={{ fontFamily: "cursive" }}
        >
          Parabéns!
        </h1>

        <p
          className="text-lg sm:text-2xl md:text-3xl text-pink-600 mb-6 sm:mb-8 px-4"
          style={{ fontFamily: "cursive" }}
        >
          Que venham muitos mais anos de amor e felicidade! 🥂
        </p>

        <div className="space-y-4">
          <p className="text-base sm:text-xl text-gray-700 px-4">
            Obrigado por fazer parte da minha vida. Melhor pessoa que Jesus me permitiu conhecer!✨
          </p>

          <Button
            onClick={onRestart}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Voltar para o início 💕
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function AnniversaryApp() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);

  // CUSTOMIZE: Replace with your own background music URL
  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    if (musicPlaying) {
      audio.play().catch(() => {
        // Handle autoplay restrictions
        setMusicPlaying(false);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [musicPlaying]);

  const screens = [
    <StartScreen key="start" onStart={() => setCurrentScreen(1)} />,
    <Timeline key="timeline" onNext={() => setCurrentScreen(2)} />,
    <Quiz key="quiz" onNext={() => setCurrentScreen(3)} />,
    <PhotoGallery key="gallery" onNext={() => setCurrentScreen(4)} />,
    <LoveLetter key="letter" onNext={() => setCurrentScreen(5)} />,
    <Celebration key="celebration" onRestart={() => setCurrentScreen(0)} />,
  ];

  return (
    <div className="relative">
      {/* Music Control - Make it more mobile-friendly */}
      <Button
        onClick={() => setMusicPlaying(!musicPlaying)}
        className="fixed top-4 right-4 z-50 bg-white/80 hover:bg-white text-pink-600 rounded-full p-2 sm:p-3 shadow-lg min-h-[44px] min-w-[44px]"
        size="icon"
      >
        {musicPlaying ? (
          <Music className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <MusicOff className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </Button>

      {screens[currentScreen]}
    </div>
  );
}
