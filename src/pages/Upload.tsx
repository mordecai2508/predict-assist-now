import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Upload as UploadIcon, 
  FileSpreadsheet, 
  CheckCircle, 
  AlertTriangle,
  Download,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";

const Upload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast({
        title: "Formato no válido",
        description: "Solo se permiten archivos CSV",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          toast({
            title: "Carga exitosa",
            description: "Los datos han sido procesados correctamente",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const downloadTemplate = () => {
    // Simulate template download
    toast({
      title: "Descarga iniciada",
      description: "Plantilla CSV descargada correctamente",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Carga de Datos
            </h1>
            <p className="text-muted-foreground">
              Importar información estudiantil desde archivos CSV
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UploadIcon className="h-5 w-5" />
                  Cargar Archivo CSV
                </CardTitle>
                <CardDescription>
                  Selecciona un archivo con datos de estudiantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!uploadComplete ? (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <FileSpreadsheet className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          Arrastra tu archivo aquí o haz clic para seleccionar
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Solo archivos CSV. Máximo 10MB.
                        </p>
                      </div>
                      <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        disabled={isUploading}
                      />
                    </div>

                    {isUploading && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Procesando archivo...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <Progress value={uploadProgress} className="h-2" />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 mx-auto text-success mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      ¡Carga Exitosa!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Se han procesado 1,247 registros de estudiantes
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button 
                        size="sm" 
                        onClick={() => navigate("/students")}
                      >
                        Ver Estudiantes
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setUploadComplete(false);
                          setUploadProgress(0);
                        }}
                      >
                        Cargar Otro
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Instrucciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mt-0.5">
                      1
                    </div>
                    <p>Descarga la plantilla CSV con la estructura requerida</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mt-0.5">
                      2
                    </div>
                    <p>Completa los datos de estudiantes siguiendo el formato</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mt-0.5">
                      3
                    </div>
                    <p>Sube el archivo completado para procesamiento automático</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Template and Requirements */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Plantilla CSV
                </CardTitle>
                <CardDescription>
                  Formato requerido para la carga de datos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Descarga la plantilla oficial con las columnas requeridas
                    y ejemplos de datos válidos.
                  </p>
                  <Button onClick={downloadTemplate} className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Descargar Plantilla
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Campos Requeridos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "ID del estudiante",
                    "Nombre completo", 
                    "Carrera",
                    "Semestre actual",
                    "Promedio académico",
                    "Porcentaje de asistencia",
                    "Nivel socioeconómico",
                    "Edad"
                  ].map((field, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Importante:</strong> Asegúrate de que todos los campos estén 
                completos y en el formato correcto. Los datos incompletos pueden 
                afectar la precisión de las predicciones.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Upload;